const Home = () => (
  <div>
    <h1 className="font-title h-screen">I am title</h1>
    <p>Regular text</p>
  </div>
);

export default Home;

export const getStaticProps = async () => ({
  props: { data: 1 },
});
