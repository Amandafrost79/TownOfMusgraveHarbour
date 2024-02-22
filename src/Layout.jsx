// Layout.jsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>{/* Content of the specific page */}
      <Footer />
    </>
  );
};

export default Layout;
