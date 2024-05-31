import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetAllProducts from "../hooks/useGetAllProducts";
import ProductReviewCard from "./ProductReviewCard";
import { toast } from "react-toastify";

const ProductDetails = () => {
  useGetAllProducts();
  const { productId } = useParams();

  const data = useSelector((store) => store.product?.allProducts?.products);
  const reqProduct = data?.find((product) => product.id === Number(productId));

  const handleAddToCart = () => {
    toast.success("added");
  };

  return (
    <div className="flex flex-col">
      <h2 className="my-4 font-display text-center text-3xl">
        Product Details
      </h2>
      {reqProduct ? (
        <div className="flex font-body gap-5">
          <div>
            <div className="h-60">
              <img className="h-96" alt="product" src={reqProduct.images[0]} />
            </div>
          </div>
          <div className="mt-6 px-2">
            {reqProduct.brand && (
              <h3 className="font-medium text-2xl">
                Brand: {reqProduct.brand}
              </h3>
            )}
            <p className="my-4">
              <span className="mr-2 px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
                {reqProduct.tags[0]}
              </span>{" "}
              <span className="mr-2 px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
                {reqProduct.tags[1]}
              </span>
            </p>
            <p className="mb-4">
              <span className="font-medium text-xl">About the Product: </span>
              <br />
              <span className="text-lg">{reqProduct.description}</span>
            </p>
            <p>
              <span className="font-medium text-xl">Price:</span>{" "}
              <span className="text-lg">${reqProduct.price}</span>
            </p>
            <p className="mb-5">
              <span className="font-medium text-xl">Rating: </span>
              <span className="text-lg">{reqProduct.rating}/5</span>
            </p>
            <p className="text-lg">{reqProduct.returnPolicy}</p>
            <p>
              <span className="font-medium text-xl">Warranty: </span>
              <span className="text-lg">{reqProduct.warrantyInformation}</span>
            </p>
            <div className="flex gap-5 items-center mt-2">
              <p className="text-lg">{reqProduct.availabilityStatus}</p>
              <button
                onClick={handleAddToCart}
                className=" text-white px-4 py-2 mr-10 bg-[#024950] rounded-lg"
              >
                Add to cart
              </button>
            </div>
            <p className="mt-2 font-medium text-lg">Reviews: </p>
            <div className="flex gap-5">
              {reqProduct.reviews.map((review, index) => {
                return <ProductReviewCard key={index} review={review} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <Shimmer classes="h-screen w-full"></Shimmer>
      )}
    </div>
  );
};

export default ProductDetails;
