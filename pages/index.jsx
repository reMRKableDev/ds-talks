import Hero from '../components/hero';

const Home = () => (
  <>
    <Hero />
  </>
);

export default Home;

export const getStaticProps = async () => ({
  props: { data: 1 },
});
