import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ handleToggleMenu }) => {
  // const [dark, setDark] = useDarkMode();

  return (
    <header>
      <div>Logo Goes here</div>
      <button onClick={handleToggleMenu}>Open</button>
      <button>Toggle theme</button>
    </header>
  );
};

export default Header;
