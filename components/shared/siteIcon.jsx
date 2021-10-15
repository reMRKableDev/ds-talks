import { SUN_ICON, MOON_ICON } from '../../lib/constants';

const SiteIcon = ({ name }) => {
  switch (name) {
    case SUN_ICON:
      return <img src="/sun.svg" alt="Sun Icon" height="40" width="40" />;
    case MOON_ICON:
      return <img src="/moon.svg" alt="Moon Icon" height="40" width="40" />;

    default:
      return null;
  }
};

export default SiteIcon;
