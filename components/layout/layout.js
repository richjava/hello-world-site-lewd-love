import Header1 from '@/templates/headers/header-1/header-1.js';
const Layout = (props) => {
  const { children, headerContent } = props;
  return (
    <>
      
<main>{children}</main>

    </>
  );
};

export default Layout;
