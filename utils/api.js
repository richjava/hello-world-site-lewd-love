import qs from "qs";
import pageSettings from "@/data/pages.json";
import layoutSettings from "@/data/layout.json";

export async function fetchAPI(path, options = {}) {
  return new Promise(async (resolve, reject) => {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let query = "";
    if (options.filters) {
      query = qs.stringify(
        {
          filters: options.filters,
        },
        {
          encodeValuesOnly: true,
        }
      );
      query = `?${query}`;
    }
    const url = new URL(`${process.env.API_URL}${path}${query}`);
    setTimeout(async () => {
      await fetch(url, options)
        .then(async (data) => {
          if (data.ok) {
            data = await data.json();
            resolve(data);
          } else {
            resolve({});
          }
        })
        .catch((e) => {
          resolve({});
        });
    }, 50);
  });
}

export async function getPaths(slug) {
  return await getCollectionData(slug);
}

export async function getProps(config) {
  return new Promise(async (resolve) => {
    if (!process.env.API_URL) {
      let message =
        "Error: No API_URL variable. Did you remember to rename the .env.example file to .env?";
      console.error(message);
      resolve({
        error: {
          code: 500,
          message: message,
        },
      });
    }
    let pageData;
    let layoutData;
    let headData = {};
    let articleData = {};
    if (!config) {
      const message = "Error: No config object provided";
      console.error(message);
      resolve({
        error: {
          code: 500,
          message: message,
        },
      });
    }
    if (!config.pageSlug) {
      const message = "Error: No pageSlug value provided";
      console.error(message);
      resolve({
        error: {
          code: 500,
          message: message,
        },
      });
    }
    const globalRes = await fetchAPI(`/global`, { populate: "*" });

    if (!globalRes || !globalRes.data) {
      const message = "Error: No global data found";
      console.error(message);
      resolve({
        error: {
          code: 500,
          message: message,
        },
      });
    }
    const globalData = globalRes.data;
    const globalDataAttributes = globalData.attributes;
    if (config.articleSlug) {
      articleData = await fetchArticleData(config, globalDataAttributes);
    }
    layoutData = await fetchRemotePageData(
      "layout",
      "layout",
      globalDataAttributes
    );
    if (!config.articleSlug) {
      headData = await fetchRemotePageData(
        "head",
        config.pageSlug,
        globalDataAttributes
      );
      pageData = await fetchRemotePageData(
        "body",
        config.pageSlug,
        globalDataAttributes
      );
    }
    resolve({ ...headData, ...layoutData, ...pageData, ...articleData });
  });
}

export async function getCollectionData(slug, config = {}) {
  config.populate = "*";
  let res = await fetchAPI(`/${slug}`, config);
  return { collection: res.data };
}

export async function fetchArticleData(config, globalData) {
  let res = await fetchAPI(`/${config.collectionSlug}`, {
    filters: {
      slug: {
        $eq: config.articleSlug,
      },
    },
  });
  let article = null;
  if (res && res.data.length) {
    article = res.data[0];
  }

  const propData = await getPropData({
    type: "body",
    pageSlug: config.pageSlug,
    articleSlug: config.articleSlug,
    pageData: article,
    globalData: globalData,
  });
  return propData;
}

export async function fetchRemotePageData(type, slug, globalData) {
  const pageRes = await fetchAPI(`/${slug}`, { populate: "*" });
  const pageData = pageRes.data;
  const pageDataAttributes = pageData.attributes;
  const propData = await getPropData({
    type: type,
    pageSlug: slug,
    pageData: pageDataAttributes,
    globalData: globalData,
  });
  return propData;
}

async function getPropData(config) {
  return new Promise(async (resolve) => {
    const propData = {};
    // layout collections
    if (config.type === "layout") {
      let sections = layoutSettings.layout.sections;
      for (const sectionName in sections) {
        const section = sections[sectionName];
        if (!section.collections) {
          continue;
        }
        for (const collectionName in section.collections) {
          const collection = section.collections[collectionName];
          let transformedCollection = await getCollection(collection.slug);
          if (transformedCollection) {
            let propName = camelize(section.slug) + "Content";

            if (!propData[propName]) {
              propData[propName] = {};
            }
            if (config.globalData) {
              propData[propName].global = config.globalData;
            }
            //add global data to section
            if (!propData[propName].collections) {
              propData[propName].collections = {};
            }
            propData[propName].collections[collection.slug] =
              transformedCollection;
          }
        }
      }
    }
    // page collections
    if (config.type === "body") {
      let page = pageSettings.pages[config.pageSlug];
      if (!page) {
        console.warn(`Page does not exist: ${config.pageSlug}`);
        return resolve(propData);
      }
      let sections = pageSettings.pages[config.pageSlug].sections;
      for (const sectionName in sections) {
        const section = sections[sectionName];
        if (section.collections) {
          for (const collectionName in section.collections) {
            // section collections
            let transformedCollection = await getCollection(collectionName);
            if (transformedCollection) {
              let propName = camelize(sectionName) + "Content";
              if (!propData[propName]) {
                propData[propName] = {};
              }
              //add global data to section
              propData[propName].global = config.globalData;
              if (!propData[propName].collections) {
                propData[propName].collections = {};
              }
              propData[propName].collections[collectionName] = {
                ...transformedCollection,
              };
            }
          }
        }
      }
    }
    // layout sections
    if (config.type == "layout" && config.pageData) {
      let sections = layoutSettings.layout.sections;
      for (const sectionName in sections) {
        const section = sections[sectionName];
        //find contentSection from CMS and assign value to prop
        for (let j = 0; j < config.pageData.contentSections.length; j++) {
          const attributes = config.pageData.contentSections[j];
          const sectionSlug = attributes.__component.split(".")[1];
          if (sectionSlug === section.slug) {
            const s = getSection(config.pageSlug, sectionSlug);
            let propName = camelize(sectionSlug) + "Content";
            if (!propData[propName]) {
              propData[propName] = {};
            }
            if (config.globalData) {
              propData[propName].global = config.globalData;
            }
            propData[propName].attributes = attributes;
            break;
          }
        }
      }
    }
    if (config.type == "head" && config.pageData) {
      for (let i = 0; i < config.pageData.contentSections.length; i++) {
        const attributes = config.pageData.contentSections[i];
        const sectionSlug = attributes.__component.split(".")[1];
        let propName = camelize(sectionSlug) + "Content";
        propData[propName] = {};
        propData[propName].attributes = attributes;
      }
    }
    // get page content data
    if (config.type === "body" && config.pageData) {
      if (!config.articleSlug) {
        let page = pageSettings.pages[config.pageSlug];
        for (const sectionName in page.sections) {
          const section = page.sections[sectionName];
          //find contentSection from CMS and assign value to prop
          for (let j = 0; j < config.pageData.contentSections.length; j++) {
            const attributes = config.pageData.contentSections[j];
            const sectionSlug = attributes.__component.split(".")[1];
            if (sectionSlug === sectionName) {
              const s = getSection(config.pageSlug, sectionSlug);
              let propName = camelize(sectionSlug) + "Content";
              if (!propData[propName]) {
                propData[propName] = {};
              }
              //add global data to section
              propData[propName].global = config.globalData;
              propData[propName].attributes = attributes;
              break;
            }
          }
        }
      }
      if (config.articleSlug) {
        let propName = camelize(config.pageSlug) + "Content";
        propData[propName] = { item: config.pageData };
        //add global data to section
        propData[propName].global = config.globalData;
        return resolve(propData);
      }
    }
    // get page collections data
    if (!pageSettings.pages[config.pageSlug]) {
      return resolve(propData);
    }
    return resolve(propData);
  });
}

function getCollection(collection) {
  return new Promise(async (resolve) => {
    let collectionData = await getCollectionData(collection);
    let items = collectionData.collection;
    let transformedCollection = {};
    transformedCollection.items = items;
    resolve(transformedCollection);
  });
}

function getSection(parentSlug, childSlug) {
  if (parentSlug === "layout") {
    return layoutSettings[parentSlug].sections[childSlug];
  } else {
    return pageSettings.pages[parentSlug].sections[childSlug];
  }
}

function camelize(str) {
  if (!str) {
    return;
  }
  return str
    .replace(/-/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
