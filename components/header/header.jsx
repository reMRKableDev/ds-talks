const Header = ({ handleToggleMenu }) => {
  return (
    <header>
      <div>Logo Goes here</div>
      <button onClick={handleToggleMenu}>Open</button>
    </header>
  );
};

export default Header;
