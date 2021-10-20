import { Switch } from '@headlessui/react';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import SiteIcon from '../shared/siteIcon';
import SiteLink from '../shared/siteLink';
import useDarkMode from '../../hooks/useDarkMode';
import {
  isEnabled,
  headerItems,
  headerWrapper,
  switchContainer,
  switchToggleWrapper,
} from './headerStyles';
import { BRAND_NAME, BG, TRANSLATE } from '../../lib/constants';

const Header = ({ handleToggleMenu }) => {
  const [enabled, setEnabled] = useDarkMode();

  const handleEnableSwitch = () => setEnabled(!enabled);

  return (
    <header className={headerWrapper}>
      <button type="button" className={headerItems} onClick={handleToggleMenu}>
        <MenuAlt4Icon className="block h-8 w-8 text-black dark:text-white" />
      </button>
      <SiteLink className={headerItems} linkTo="/" value={BRAND_NAME} />
      <Switch
        checked={enabled}
        onChange={handleEnableSwitch}
        className={`${isEnabled(enabled, BG)} ${switchContainer}`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(enabled, TRANSLATE)} ${switchToggleWrapper}`}
        >
          <SiteIcon name={isEnabled(enabled)} />
        </span>
      </Switch>
    </header>
  );
};

export default Header;
