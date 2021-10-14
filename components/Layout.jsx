import { useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <div>
      <Header />
      <Navbar handleToggleMenu={handleToggleMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
