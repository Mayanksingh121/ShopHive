import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import ProductReviewCard from "./ProductReviewCard";
import { toast } from "react-hot-toast";
import { addToCart, removeFromCart } from "../../utils/cartSlice";
import { useState } from "react";

const ProductDetails = () => {
  useGetAllProducts();
  const [itemAdded, setItemAdded] = useState(false);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((store) => store.product?.allProducts?.products);
  const reqProduct = data?.find((product) => product.id === Number(productId));

  const handleClick = () => {
    if (itemAdded) {
      dispatch(removeFromCart(reqProduct));
      setItemAdded(false);
      toast.success("Item Removed!");
    } else {
      setItemAdded(true);
      dispatch(addToCart(reqProduct));
      toast.success("Item added to cart!");
    }
  };

  return (
    <div className="dark:bg-[#111111] md:h-screen w-[100%] flex flex-col dark:text-white px-4">
      <h2 className="my-4 font-display text-center text-3xl">
        Product Details
      </h2>
      {reqProduct ? (
        <div className="flex flex-col md:flex-row font-body gap-5">
          <div className="flex flex-col mt-2 md:pl-4 md:pr-10 md:w-1/2">
            {reqProduct.brand && (
              <h3 className="font-bold md:text-3xl">Brand: {reqProduct.brand}</h3>
            )}
            <p className="my-4">
              <span className="mr-2 px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
                {reqProduct.tags[0]}
              </span>{" "}
              <span className="mr-2 px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
                {reqProduct.tags[1]}
              </span>
            </p>
            <div className="flex justify-between w-full lg:w-2/3 my-7 md:mt-7  md:mb-8">
              <p className="font-semibold text-xl">${reqProduct.price}</p>
              <p className="mb-5 flex items-center gap-2">
                <span className="flex text-yellow-400">
                  <FaStar /> <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-sm font-semibold">
                  {reqProduct.rating} / 5.0
                </span>
              </p>
            </div>

            <p className="mb-4">{reqProduct.description}</p>
            <p className="text-sm">{reqProduct.returnPolicy}</p>
            <p>
              <span className="font-medium text-lg">Warranty: </span>
              <span className="text-sm">{reqProduct.warrantyInformation}</span>
            </p>
            <div className="flex justify-between items-center mt-5 md:mt-2">
              <p className="text-lg">{reqProduct.availabilityStatus}</p>
              <button
                onClick={handleClick}
                className={`text-white px-4 py-2 mr-10 ${
                  itemAdded ? "bg-[#f63a2f]" : "bg-[#0e3a93]"
                } rounded-lg`}
              >
                {itemAdded ? "Remove Item" : "Add to cart"}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-center dark:bg-[#19191a] w-full rounded-xl">
              <img className="h-96" alt="product" src={reqProduct.images[0]} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen bg-gray-100"></div>
      )}
      {reqProduct ? (
        <div className="hidden md:block">
          <p className="my-4 font-medium text-lg">Reviews: </p>
          <div className="flex gap-5 ">
            {reqProduct.reviews.map((review, index) => {
              return <ProductReviewCard key={index} review={review} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
