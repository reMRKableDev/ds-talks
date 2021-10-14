import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>I am footer</footer>
    </div>
  );
};

export default Layout;
