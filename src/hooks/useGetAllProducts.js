import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllProducts } from "../utils/productSlice";

const useGetAllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    dispatch(addAllProducts(json));
  };
};

export default useGetAllProducts;
