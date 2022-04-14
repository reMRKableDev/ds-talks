import { useState } from 'react';
import Header from './header';
import Menu from './menu';
/* import Footer from './footer'; */

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="flex flex-col h-screen relative dark:bg-black">
      <Header handleToggleMenu={handleToggleMenu} />
      <Menu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
