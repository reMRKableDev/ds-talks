const Map = () => {
  return <div>I'm map</div>;
};

export default Map;

export const getStaticProps = async () => {
  return {
    props: { data: 1 },
  };
};
