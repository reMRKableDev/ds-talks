import { useState } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <main>{children}</main>
      <footer>I am footer</footer>
    </div>
  );
};

export default Layout;
