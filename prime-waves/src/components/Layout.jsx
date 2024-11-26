// components/Layout.js
import React from 'react';
import Header from './Header';
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-[var(--dark-bg)] py-4 px-4">{children}</main>
      <footer>
        <p>Global Footer</p>
      </footer>
    </>
  );
};

export default Layout;