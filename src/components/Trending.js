import { useSelector } from "react-redux";
import useGetTrendingData from "../hooks/useGetTrendingData";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Trending = () => {
  useGetTrendingData();

  const { trendingProducts, darkMode } = useSelector((store) => store.product);

  const trendingData = trendingProducts?.products;
  const shimmerCount = 10;

  return (
    <div
      id="trending"
      className={`${
        darkMode ? "dark:bg-[#000000]" : ""
      } p-4 md:p-6 dark:text-white`}
    >
      <h2 className="font-display text-xl md:text-2xl">Trending</h2>
      <div className="flex gap-6 overflow-x-scroll hide-scrollbar py-6">
        {trendingData
          ? trendingData.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : Array.from({ length: shimmerCount }).map((_, index) => (
              <Shimmer classes="w-60 h-72" key={index} />
            ))}
      </div>
    </div>
  );
};

export default Trending;
