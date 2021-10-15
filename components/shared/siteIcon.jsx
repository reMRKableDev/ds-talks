const SiteIcon = ({ name }) => {
  switch (name) {
    case 'sun':
      return <img src="/sun.svg" alt="Sun Icon" height="40" width="40" />;
    case 'moon':
      return <img src="/moon.svg" alt="Moon Icon" height="40" width="40" />;

    default:
      return null;
  }
};

export default SiteIcon;
