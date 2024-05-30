import useGetTrendingData from "../hooks/useGetTrendingData";

const Trending = () => {
  const trendingData = useGetTrendingData();
  console.log(trendingData);

  return (
    <div>
      <h2>Trending</h2>
      <div></div>
    </div>
  );
};

export default Trending;
