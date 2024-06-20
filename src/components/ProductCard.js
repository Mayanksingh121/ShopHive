import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
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

  return (
    <div className="rounded-2xl border dark:border-[#232325] shadow-md w-44 md:w-60">
      <div className="bg-gradient-to-br from-[#5372b1] to-[#0e3a93] w-44 md:w-60 flex items-center justify-center rounded-t-2xl">
        <img className="h-24 md:h-36" src={product.images[0]} alt="productImage"></img>
      </div>
      <div className="dark:bg-[#19191a] p-2">
        <h3 className="font-body font-medium text-[#5e666b] dark:text-white h-16 md:h-12 text-sm">
          {product.title}
        </h3>
        <p>
          <span className="mr-1 md:mr-2 px-2 py-1 rounded-xl text-xs md:text-sm border text-[#5e666b] dark:text-white border-[#d8f1ee] dark:border-white">
            {product.tags[0]}
          </span>
          {product.tags[1] && <span className="px-2 py-1 rounded-xl text-xs md:text-sm border text-[#5e666b] dark:text-white border-[#d8f1ee]">
            {product.tags[1]}
          </span>}
        </p>
        <div className="flex justify-between items-center my-4 pr-1">
          <p className="font-bold text-sm md:text-lg">${product.price}</p>
          <button
            onClick={handleClick}
            className={`${
              itemAdded ? "bg-[#f63a2f]" : "bg-gradient-to-br from-[#5372b1] to-[#0e3a93]"
            } rounded-sm px-2 py-2 border-[1px] text-sm md:text-medium dark:border-0 font-medium  text-white`}
          >
            {itemAdded ? "Remove Item" : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="dark:bg-[#19191a] w-full rounded-b-xl flex justify-center">
        <Link to={"/products/" + product.id}>
          <button
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
