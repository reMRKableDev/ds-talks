import { useState } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
import { mainWrapper, layoutContainer } from './layoutStyles';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    console.log('here');
    setShowMenu(!showMenu);
  };

  return (
    <div className={layoutContainer}>
      <Header handleToggleMenu={handleToggleMenu} />
      <Navbar handleToggleMenu={handleToggleMenu} />
      <main className={mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
