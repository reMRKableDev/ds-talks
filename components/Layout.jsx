const Layout = ({ children }) => {
  return (
    <div>
      <header>I am navigation</header>
      <main>{children}</main>
      <footer>I am footer</footer>
    </div>
  );
};

export default Layout;
