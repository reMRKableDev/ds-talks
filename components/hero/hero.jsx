/* eslint-disable jsx-a11y/anchor-is-valid */
import SiteLink from '../shared/siteLink';
import { MAP_SLUG, SEE_MAP } from '../../lib/constants';
import {
  heroWrapper,
  heroSubtitle,
  heroContainer,
  heroButtonLink,
  heroTitleChild1,
  heroTitleChild2,
  heroTitleWrapper,
  heroButtonLinkWrapper,
} from './heroStyles';

const Hero = () => (
  <div className={heroContainer}>
    <div className={heroWrapper}>
      <h1 className={heroTitleWrapper}>
        <span className={heroTitleChild1}>Dance Specific</span>{' '}
        <span className={heroTitleChild2}>TALKS</span>
      </h1>
      <p className={heroSubtitle}>
        A unique podcast with stories from professional dancers worldwide!
      </p>
      <div className={heroButtonLinkWrapper}>
        <SiteLink
          className={heroButtonLink}
          linkTo={MAP_SLUG}
          value={SEE_MAP}
        />
      </div>
    </div>
  </div>
);

export default Hero;
