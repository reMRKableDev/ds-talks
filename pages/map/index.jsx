const Map = () => {
  return <div>I'm map</div>;
};

export default Map;

export const getStaticProps = async () => {
  return {
    props: 1,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: { params: ['/map'] },
    fallback: false,
  };
};
