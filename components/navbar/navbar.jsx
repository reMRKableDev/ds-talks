import NextLink from '../shared/nextLink';

const Navbar = ({ handleToggleMenu }) => {
  return (
    <aside>
      <nav>
        <button onClick={handleToggleMenu}>Close</button>
        <div>
          <NextLink linkTo="/" value="Home" />
          <NextLink linkTo="/map" value="Map" />
        </div>

        <div>
          <p>Follow on Social Media</p>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
