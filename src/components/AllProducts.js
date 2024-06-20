import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AllProducts = () => {
  useGetAllProducts();
  const { allProducts, darkMode } = useSelector(
    (store) => store.product
  );

  const allProductsInStore = allProducts?.products;
  const shimmerCount = 30;

  return (
    <div
      className={` ${
        darkMode ? "dark:bg-[#000000]" : ""
      } flex flex-col w-full justify-center dark:text-white`}
    >
      <h2 className="my-4 text-2xl font-display font-medium text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-2  gap-7 md:gap-10 md:grid-cols-4 py-6 w-[90%] m-auto">
        {allProductsInStore
          ? allProductsInStore.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : Array.from({ length: shimmerCount }).map((_, index) => (
              <Shimmer classes="w-60 h-72" key={index} />
            ))}
      </div>
    </div>
  );
};

export default AllProducts;
