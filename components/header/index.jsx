import NextLink from '../shared/nextLink';

const Header = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <nav>
      <NextLink linkTo="/" value="Home" />
      <NextLink linkTo="/map" value="Map" />
      <div>
        <p>Follow on Social Media</p>
      </div>
    </nav>
  );
};

export default Header;
