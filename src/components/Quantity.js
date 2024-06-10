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
      Qty:
      <div className="flex border border-black rounded-2xl">
        <button
          onClick={handleRemove}
          className="px-2 text-blue-600 font-bold text-2xl"
        >
          -
        </button>
        <p className="font-medium flex items-center border border-black px-3 border-b-0 border-t-0">
          {itemInCart.quantity}
        </p>
        <button
          onClick={handleAddItem}
          className=" px-2 text-blue-600 font-bold text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
