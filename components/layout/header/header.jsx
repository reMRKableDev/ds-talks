import { SunIcon, MoonIcon, MenuAlt4Icon } from '@heroicons/react/outline';
import SiteLink from 'components/shared/siteLink';
import { useDarkMode, useUI } from 'hooks';
import {
  menuIcon,
  isEnabled,
  headerLogo,
  headerItems,
  setIconColor,
  headerWrapper,
  switchContainer,
  switchToggleWrapper,
} from './headerStyles';
import Button from 'components/shared/ui/button';
import { BRAND_NAME, BG, TRANSLATE } from 'lib/constants/';

const Header = () => {
  const [enabled, setEnabled] = useDarkMode();
  const { handleToggleMenu } = useUI();

  const handleEnableSwitch = () => setEnabled(!enabled);

  return (
    <header className={headerWrapper}>
      <Button
        onClick={handleEnableSwitch}
        className={`${isEnabled(enabled, BG)} ${switchContainer}`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(enabled, TRANSLATE)} ${switchToggleWrapper}`}
        >
          {enabled ? (
            <MoonIcon className={setIconColor('moon')} />
          ) : (
            <SunIcon className={setIconColor('sun')} />
          )}
        </span>
      </Button>
      <SiteLink className={headerLogo} linkTo="/" value={BRAND_NAME} />

      <Button className={headerItems} onClick={handleToggleMenu}>
        <MenuAlt4Icon className={menuIcon} />
      </Button>
    </header>
  );
};

export default Header;
