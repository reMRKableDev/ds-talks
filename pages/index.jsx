const Home = () => {
  return <div>I'm home</div>;
};

export default Home;

export const getStaticProps = async (params) => {
  return {
    props: { data: 1 },
  };
};
