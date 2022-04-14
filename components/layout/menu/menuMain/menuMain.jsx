import SiteLink from 'components/shared/siteLink';
import {
  DEV,
  MAP,
  HOME,
  ABOUT,
  DEV_LINK,
  MAP_SLUG,
  HOME_SLUG,
  TZER_LINK,
} from 'lib/constants';
import {
  mainWrapper,
  mainContent,
  mainContainer,
  mainContentLinks,
} from './menuMainStyles';

const MenuMain = () => (
  <div className={mainContainer}>
    <div className={mainWrapper}>
      <div className={mainContent}>
        <div className={mainContentLinks}>
          <SiteLink linkTo={HOME_SLUG} value={HOME} />
          <SiteLink linkTo={MAP_SLUG} value={MAP} />
          <SiteLink externalLink={TZER_LINK} value={ABOUT} />
        </div>
        <p>Follow on Social Media</p>
        <p>Support on Patreon</p>
        <p>Subscribe to</p>
        <p>
          Made with love by{' '}
          <span>
            <SiteLink externalLink={DEV_LINK} value={DEV} />
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default MenuMain;
