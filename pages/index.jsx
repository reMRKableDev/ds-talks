import Hero from '../components/hero';

const Home = () => (
  <div>
    <Hero />
  </div>
);

export default Home;

export const getStaticProps = async () => ({
  props: { data: 1 },
});
