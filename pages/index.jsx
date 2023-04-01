import Hero from '../components/hero';
// import LatestEpisodes from '../components/latestEpisodes';

const Home = () => (
  <>
    <Hero />
    {/*     <LatestEpisodes /> */}
  </>
);

export default Home;

export const getStaticProps = async () => ({
  props: { data: 1 },
});
