import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingProducts } from "../utils/productSlice";

const useGetTrendingData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrendingData();
  }, []);

const getTrendingData = async () => {
  const data = await fetch("https://dummyjson.com/products?limit=6&skip=5");
  const json = await data.json();
  dispatch(addTrendingProducts(json));
}};

export default useGetTrendingData;
