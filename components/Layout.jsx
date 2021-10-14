import { useState } from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <div>
      <header>
        Logo Goes
        <button onClick={handleToggleMenu}>Opening</button>
      </header>
      <Navbar handleToggleMenu={handleToggleMenu} />
      <main>{children}</main>
      <footer>I am footer</footer>
    </div>
  );
};

export default Layout;
