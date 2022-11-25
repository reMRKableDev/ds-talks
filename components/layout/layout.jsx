import { useUI } from 'hooks';
import Header from './header';
import Menu from './menu';

const Layout = ({ children }) => {
  const { displayMenu, handleToggleMenu } = useUI();

  return (
    <div className="flex flex-col h-screen relative dark:bg-black">
      <Header handleToggleMenu={handleToggleMenu} />
      <Menu showMenu={displayMenu} handleToggleMenu={handleToggleMenu} />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
