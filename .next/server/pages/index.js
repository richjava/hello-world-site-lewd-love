/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/templates lazy recursive ^\\.\\/.*\\/.*\\/.*\\.js$":
/*!**************************************************************************!*\
  !*** ./components/templates/ lazy ^\.\/.*\/.*\/.*\.js$ namespace object ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./covers/cover-1/cover-1.js": [
		"./components/templates/covers/cover-1/cover-1.js",
		"components_templates_covers_cover-1_cover-1_js"
	],
	"./footers/footer-1/footer-1.js": [
		"./components/templates/footers/footer-1/footer-1.js",
		"components_templates_footers_footer-1_footer-1_js"
	],
	"./headers/header-1/header-1.js": [
		"./components/templates/headers/header-1/header-1.js",
		"components_templates_headers_header-1_header-1_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./components/templates lazy recursive ^\\.\\/.*\\/.*\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./.theme/page.js":
/*!************************!*\
  !*** ./.theme/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst { transformPage  } = __webpack_require__(/*! @builtjs/theme */ \"@builtjs/theme\");\nconst Page = ({ config  })=>{\n    const { 0: page1 , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: layoutComps , 1: setLayoutComps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: sectionComps , 1: setSectionComps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        init();\n    }, []);\n    async function init() {\n        if (!config) {\n            return;\n        }\n        let page = await transformPage(config);\n        setPage(page);\n        let sectionComponentMap = await getComponentMap(page.sections);\n        let sectionComponents = await getComponents(sectionComponentMap);\n        setSectionComps(sectionComponents);\n        if (!page) {\n            return;\n        }\n        let layoutComponentMap = await getComponentMap(page.layout.sections);\n        let layoutComponents = await getComponents(layoutComponentMap);\n        setLayoutComps(layoutComponents);\n    }\n    async function getComponentMap(sections) {\n        return new Promise(async (resolve)=>{\n            const map = {};\n            for(let i = 0; i < sections.length; i++){\n                const template = sections[i].template.doc;\n                map[\"section\" + i] = __webpack_require__(\"./components/templates lazy recursive ^\\\\.\\\\/.*\\\\/.*\\\\/.*\\\\.js$\")(`./${template.category}/${template.slug}/${template.slug}.js`);\n            }\n            resolve(map);\n        });\n    }\n    function getComponents(map) {\n        return new Promise((resolve)=>{\n            let comps = [];\n            for (const key of Object.keys(map)){\n                let comp = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>map[key]\n                , {\n                    suspense: false\n                });\n                comps.push(comp);\n            }\n            resolve(comps);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            layoutComps: layoutComps,\n            page: page1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: sectionComps.length > 0 && sectionComps.map((Section, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                        content: page1.sections[i].content\n                    }, i, false, {\n                        fileName: \"/Users/richard/Desktop/Projects/BuiltJS/builtjs-theme-helloworld/.theme/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 24\n                    }, undefined);\n                })\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/Users/richard/Desktop/Projects/BuiltJS/builtjs-theme-helloworld/.theme/page.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztLQUNKO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUM5QixpRUFBTTtZQUFDUSxXQUFXLEVBQUVBLFdBQVc7WUFBRUYsSUFBSSxFQUFFQSxLQUFJO3NCQUV4QzswQkFDR0ksWUFBWSxDQUFDZSxNQUFNLEdBQUcsQ0FBQyxJQUN0QmYsWUFBWSxDQUFDYSxHQUFHLENBQUMsQ0FBQ2MsT0FBTyxFQUFFYixDQUFDLEdBQUs7b0JBQy9CLHFCQUFPLDhEQUFDYSxPQUFPO3dCQUFTQyxPQUFPLEVBQUVoQyxLQUFJLENBQUNTLFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDLENBQUNjLE9BQU87dUJBQXBDZCxDQUFDOzs7O2lDQUF1QyxDQUFDO2lCQUMvRCxDQUFDOzZCQUNIOzs7OztxQkFFRTtxQkFDUixDQUNIO0NBQ0g7QUFFRCxpRUFBZXBCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1aWx0anMtdGhlbWUtaGVsbG8td29ybGQvLi8udGhlbWUvcGFnZS5qcz85ZjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgeyB0cmFuc2Zvcm1QYWdlIH0gPSByZXF1aXJlKFwiQGJ1aWx0anMvdGhlbWVcIik7XG5cbmNvbnN0IFBhZ2UgPSAoeyBjb25maWcgfSkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsYXlvdXRDb21wcywgc2V0TGF5b3V0Q29tcHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VjdGlvbkNvbXBzLCBzZXRTZWN0aW9uQ29tcHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhZ2UgPSBhd2FpdCB0cmFuc2Zvcm1QYWdlKGNvbmZpZyk7XG4gICAgc2V0UGFnZShwYWdlKTtcbiAgICBsZXQgc2VjdGlvbkNvbXBvbmVudE1hcCA9IGF3YWl0IGdldENvbXBvbmVudE1hcChwYWdlLnNlY3Rpb25zKTtcbiAgICBsZXQgc2VjdGlvbkNvbXBvbmVudHMgPSBhd2FpdCBnZXRDb21wb25lbnRzKHNlY3Rpb25Db21wb25lbnRNYXApO1xuICAgIHNldFNlY3Rpb25Db21wcyhzZWN0aW9uQ29tcG9uZW50cyk7XG4gICAgaWYgKCFwYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBsYXlvdXRDb21wb25lbnRNYXAgPSBhd2FpdCBnZXRDb21wb25lbnRNYXAocGFnZS5sYXlvdXQuc2VjdGlvbnMpO1xuICAgIGxldCBsYXlvdXRDb21wb25lbnRzID0gYXdhaXQgZ2V0Q29tcG9uZW50cyhsYXlvdXRDb21wb25lbnRNYXApO1xuICAgIHNldExheW91dENvbXBzKGxheW91dENvbXBvbmVudHMpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50TWFwKHNlY3Rpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzZWN0aW9uc1tpXS50ZW1wbGF0ZS5kb2M7XG4gICAgICAgIG1hcFtcInNlY3Rpb25cIiArIGldID0gaW1wb3J0KFxuICAgICAgICAgIGAuLi9jb21wb25lbnRzL3RlbXBsYXRlcy8ke3RlbXBsYXRlLmNhdGVnb3J5fS8ke3RlbXBsYXRlLnNsdWd9LyR7dGVtcGxhdGUuc2x1Z30uanNgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKG1hcCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wb25lbnRzKG1hcCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGNvbXBzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtYXApKSB7XG4gICAgICAgIGxldCBjb21wID0gZHluYW1pYygoKSA9PiBtYXBba2V5XSwge1xuICAgICAgICAgIHN1c3BlbnNlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBzLnB1c2goY29tcCk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKGNvbXBzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgbGF5b3V0Q29tcHM9e2xheW91dENvbXBzfSBwYWdlPXtwYWdlfT5cbiAgICAgICAge1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7c2VjdGlvbkNvbXBzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgc2VjdGlvbkNvbXBzLm1hcCgoU2VjdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbiBrZXk9e2l9IGNvbnRlbnQ9e3BhZ2Uuc2VjdGlvbnNbaV0uY29udGVudH0gLz47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJkeW5hbWljIiwidHJhbnNmb3JtUGFnZSIsInJlcXVpcmUiLCJQYWdlIiwiY29uZmlnIiwicGFnZSIsInNldFBhZ2UiLCJsYXlvdXRDb21wcyIsInNldExheW91dENvbXBzIiwic2VjdGlvbkNvbXBzIiwic2V0U2VjdGlvbkNvbXBzIiwiaW5pdCIsInNlY3Rpb25Db21wb25lbnRNYXAiLCJnZXRDb21wb25lbnRNYXAiLCJzZWN0aW9ucyIsInNlY3Rpb25Db21wb25lbnRzIiwiZ2V0Q29tcG9uZW50cyIsImxheW91dENvbXBvbmVudE1hcCIsImxheW91dCIsImxheW91dENvbXBvbmVudHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1hcCIsImkiLCJsZW5ndGgiLCJ0ZW1wbGF0ZSIsImRvYyIsImNhdGVnb3J5Iiwic2x1ZyIsImNvbXBzIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImNvbXAiLCJzdXNwZW5zZSIsInB1c2giLCJTZWN0aW9uIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./.theme/page.js\n");

/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = (props)=>{\n    const { children , layoutComps , page  } = props;\n    const { 0: contentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: layoutComps.length > 0 && layoutComps.map((Section, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                        content: page.layout.sections[i].content\n                    }, i, false, {\n                        fileName: \"/Users/richard/Desktop/Projects/BuiltJS/builtjs-theme-helloworld/components/layout/layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 15\n                    }, undefined),\n                    i === contentIndex - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        id: \"main\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/richard/Desktop/Projects/BuiltJS/builtjs-theme-helloworld/components/layout/layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 42\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVqQyxNQUFNQyxNQUFNLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3hCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxXQUFXLEdBQUVDLElBQUksR0FBRSxHQUFHSCxLQUFLO0lBQzdDLE1BQU0sRUFKUixHQUlTSSxZQUFZLE1BQUlOLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLHFCQUNFO2tCQUNHSSxXQUFXLENBQUNHLE1BQU0sR0FBRyxDQUFDLElBQ3JCSCxXQUFXLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLENBQUMsR0FBSztZQUM5QixxQkFDRTs7a0NBQ0UsOERBQUNELE9BQU87d0JBQVNFLE9BQU8sRUFBRU4sSUFBSSxDQUFDTyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDLENBQUNDLE9BQU87dUJBQTNDRCxDQUFDOzs7O2lDQUE4QztvQkFDNURBLENBQUMsS0FBS0osWUFBWSxHQUFHLENBQUMsa0JBQUksOERBQUNRLE1BQUk7d0JBQUNDLEVBQUUsRUFBQyxNQUFNO2tDQUFFWixRQUFROzs7OztpQ0FBUTs7NEJBQzNELENBQ0g7U0FDSCxDQUFDO3FCQUNILENBQ0g7Q0FDSDtBQUVELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWlsdGpzLXRoZW1lLWhlbGxvLXdvcmxkLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2NiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGxheW91dENvbXBzLCBwYWdlIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvbnRlbnRJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xheW91dENvbXBzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgbGF5b3V0Q29tcHMubWFwKChTZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTZWN0aW9uIGtleT17aX0gY29udGVudD17cGFnZS5sYXlvdXQuc2VjdGlvbnNbaV0uY29udGVudH0gLz5cbiAgICAgICAgICAgICAge2kgPT09IGNvbnRlbnRJbmRleCAtIDEgJiYgPG1haW4gaWQ9XCJtYWluXCI+e2NoaWxkcmVufTwvbWFpbj59XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJsYXlvdXRDb21wcyIsInBhZ2UiLCJjb250ZW50SW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJTZWN0aW9uIiwiaSIsImNvbnRlbnQiLCJsYXlvdXQiLCJzZWN0aW9ucyIsIm1haW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if ( true && suspenseOptions.suspense) {\n        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === \"boolean\") {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nif (typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) {\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUdHLE9BQU8sQ0FBQztBQUMxQkgsYUFBYSxHQUFHSSxLQUFLLENBQUM7QUFDdEIsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDLENBQUM7QUFDN0QsU0FBU0osT0FBTyxDQUFDTSxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN0QyxJQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ04sT0FBTztJQUNsQyxJQUFJVSxlQUFlLEdBQUc7UUFDbEIsd0RBQXdEO1FBQ3hEQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQyxLQUFLLEdBQUdDLFNBQVMsR0FBR0MsU0FBUyxHQUFHLEdBQUc7WUFDM0MsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSUMsSUFBc0MsRUFBRTtnQkFDeEMsSUFBSUYsU0FBUyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUlELEtBQUssRUFBRTtvQkFDUCxPQUFPLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsYUFBYSxDQUFDZCxNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUU7aUJBQ3JKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxxRUFBcUU7SUFDckUsd0dBQXdH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OUdKLE1BQU0sQ0FBQ3dDLE1BQU0sQ0FBQ3RDLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUN4Q3VDLE1BQU0sQ0FBQ3ZDLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUM7Q0FDbEMsQ0FFRCxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWlsdGpzLXRoZW1lLWhlbGxvLXdvcmxkLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/ZTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICAvLyBFcnJvciBpZiBGaXp6IHJlbmRlcmluZyBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cblxuaWYgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpIHtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiZHluYW1pYyIsIm5vU1NSIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibG9hZGFibGVPcHRpb25zIiwibG9hZGluZyIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwicHJvY2VzcyIsImNyZWF0ZUVsZW1lbnQiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwiZW52IiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsInRpbWVkT3V0IiwiYXNzaWduIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _builtjs_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @builtjs/theme */ \"@builtjs/theme\");\n/* harmony import */ var _builtjs_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builtjs_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.theme/page */ \"./.theme/page.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_theme_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nasync function getStaticProps() {\n    const config = await (0,_builtjs_theme__WEBPACK_IMPORTED_MODULE_0__.getConfig)(\"home\");\n    return {\n        props: {\n            config\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNUO0FBRWxDLGlFQUFlQyxtREFBSSxFQUFDO0FBRWIsZUFBZUMsY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLE1BQU0sR0FBRyxNQUFNSCx5REFBUyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxPQUFPO1FBQ0xJLEtBQUssRUFBRTtZQUFFRCxNQUFNO1NBQUU7S0FDbEIsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVpbHRqcy10aGVtZS1oZWxsby13b3JsZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIkBidWlsdGpzL3RoZW1lXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vLnRoZW1lL3BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoXCJob21lXCIpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNvbmZpZyB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwiUGFnZSIsImdldFN0YXRpY1Byb3BzIiwiY29uZmlnIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1aWx0anMtdGhlbWUtaGVsbG8td29ybGQvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzPzczZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@builtjs/theme":
/*!*********************************!*\
  !*** external "@builtjs/theme" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@builtjs/theme");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();