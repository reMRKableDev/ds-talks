/* eslint-disable jsx-a11y/anchor-is-valid */
import SiteLink from '../shared/siteLink';
import { MAP_SLUG, SEE_MAP } from '../../lib/constants';

const Hero = () => (
  <section className="h-5/6 px-4 py-2 md:h-1/2 md:px-3">
    <div className="select-none h-full flex flex-col justify-center items-center">
      <h1 className="self-start mt-5 tracking-tight font-extrabold text-5xl md:text-6xl">
        <span className="block xl:inline dark:text-white">Dance Specific</span>{' '}
        <span className="block xl:inline text-brandOrange">TALKS</span>
      </h1>
      <p className="self-start my-10 text-black dark:text-white text-lg md:mt-5 md:text-xl">
        A unique podcast with stories from professional dancers worldwide!
      </p>
      <div className="self-start rounded-full w-3/4 p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 md:w-1/3 md:cursor-pointer transform motion-safe:hover:scale-110">
        <SiteLink
          className="py-3 px-6 flex justify-center rounded-full w-full bg-gradient-to-r from-white to-white text-black hover:text-white hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 dark:from-black dark:to-black dark:text-white"
          linkTo={MAP_SLUG}
          value={SEE_MAP}
        />
      </div>
    </div>
  </section>
);

export default Hero;
