import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast"
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [itemAdded, setItemAdded] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (itemAdded) {
      dispatch(removeFromCart(product));
      setItemAdded(false);
      toast.success("Item Removed!");
    } else {
      dispatch(addToCart(product));
      setItemAdded(true);
      toast.success("Item added to your cart!");
    }
  };

  const handleProductDetailsClick = () => {};

  return (
    <div className="rounded-2xl border shadow-md  w-60">
      <div className="bg-gradient-to-br from-[#5372b1] to-[#0e3a93]  w-60 flex items-center justify-center rounded-t-2xl">
        <img className="h-36" src={product.images[0]} alt="productImage"></img>
      </div>
      <div className="p-2">
        <h3 className="font-body font-medium text-[#5e666b] dark:text-white h-12 text-sm">
          {product.title}
        </h3>
        <p>
          <span className="mr-2 px-2 py-1 rounded-xl text-sm border text-[#5e666b] dark:text-white border-[#d8f1ee] dark:border-white">
            {product.tags[0]}
          </span>
          <span className="px-2 py-1 rounded-xl text-sm border text-[#5e666b] dark:text-white border-[#d8f1ee]">
            {product.tags[1]}
          </span>
        </p>
        <div className="flex justify-between items-center my-4 pr-1">
          <p className="font-bold text-lg">${product.price}</p>
          <button
            onClick={handleClick}
            className={`${
              itemAdded ? "bg-[#f63a2f]" : "bg-[#0e3a93]"
            } rounded-sm px-2 py-2 border-[1px]  dark:border-0 font-medium  text-white`}
          >
            {itemAdded ? "Remove Item" : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="w-full rounded-b-xl flex justify-center">
        <Link to={"/products/" + product.id}>
          <button
            onClick={handleProductDetailsClick}
            className="text-[#5e666b] dark:text-white cursor-pointer text-center font-body font-medium"
          >
            Get Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
