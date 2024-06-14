import React from "react";
import { useDispatch } from "react-redux";
import { removeSingleItem, addToCart, removeFromCart } from "../utils/cartSlice";

const Quantity = ({ itemInCart }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if(itemInCart.quantity===1){
      dispatch(removeFromCart(itemInCart));
    }
    else{
    dispatch(removeSingleItem(itemInCart));
    }
  };

  const handleAddItem = () => {
    dispatch(addToCart(itemInCart));
  };

  return (
    <div className="flex gap-3">
      <p className="text-sm font-medium text-[#564429]">Qty:</p>
      <div className="flex border border-black rounded-2xl">
        <button
          onClick={handleRemove}
          className="px-2 text-blue-600"
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <p className=" flex justify-center border border-black w-8 border-b-0 border-t-0">
          {itemInCart.quantity}
        </p>
        <button
          onClick={handleAddItem}
          className=" px-2 text-blue-600"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
