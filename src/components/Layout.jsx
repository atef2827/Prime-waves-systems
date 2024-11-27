// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/global.scss";
import StikyNav from './StikyNav';
import NavTitle from './NavTitle';

export const metadata = {
  title: 'Prime Waves test page',
  description: 'Prime Waves test page - Any description.',
  openGraph: {
      title: 'Prime Waves test page',
      description: 'Prime Waves test page - Any description.',
      images: [
        {
          url: 'https://yourdomain.com/path/to/your-image.jpg', 
          width: 1200,
          height: 630,
          alt: 'Description of the image', 
        },
      ],
    },
}

const Layout = ({ children, hideNav, title, link }) => {
  return (
    <>
      {
        !hideNav?
          <Header />
        :null 
      }
      {
        hideNav && title && link?
          <NavTitle title={title} link={link} />
        :null 
      }
        <main className="bg-[var(--dark-bg)] py-4 px-4">{children}</main>
      <StikyNav />
      <Footer />
    </>
  );
};


export default Layout;