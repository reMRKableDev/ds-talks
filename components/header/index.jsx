import NextLink from '../shared/nextLink';

const Header = () => {
  return (
    <nav>
      <NextLink linkTo="/" value="Home" />
      <NextLink linkTo="/map" value="Map" />
      <div>
        <p>Follow on Social Media</p>
        <div>
          <NextLink linkTo="/" value="Home" />
          <NextLink linkTo="/map" value="Map" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
