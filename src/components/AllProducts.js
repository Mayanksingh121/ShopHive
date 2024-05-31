import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import useGetAllProducts from "../hooks/useGetAllProducts";

const AllProducts = () => {
  useGetAllProducts();
  const allProductsInStore = useSelector(
    (store) => store.product?.allProducts?.products
  );

  const shimmerCount = 30;
  return (
    <div className="flex flex-col w-full justify-center">
      <h2 className="my-10 text-2xl font-display font-medium text-center">
        Our Products
      </h2>
      <div className="grid gap-8 md:grid-cols-4 py-6 w-[90%] m-auto">
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
