import { useSelector } from "react-redux";
import useGetTrendingData from "../hooks/useGetTrendingData";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Trending = () => {
  useGetTrendingData();

  const trendingData = useSelector(
    (store) => store.product?.trendingProducts?.products
  );

  const shimmerCount = 10;

  return (
    <div id="trending" className="p-6">
      <h2 className="font-display text-2xl">Trending</h2>
      <div className="grid gap-8 md:grid-cols-4 py-6">
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
