import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
import Quantity from "./Quantity";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="w-full border-[1px] bg-white  border-gray-300 rounded-xl shadow-lg pr-2">
      <div className="pt-1">
        <i
          onClick={handleRemoveFromCart}
          className="text-black flex justify-end fa-solid fa-xmark cursor-pointer"
        ></i>
      </div>
      <div className="flex">
        <div className="w-[40%] flex justify-center">
          <img className="h-44" src={item.images[0]} alt="item" />
        </div>
        <div className="w-[60%] flex flex-col">
          <div className="text-center">
            <h2 className="text-black font-body font-bold text-xl mb-2">{item.title}</h2>
            <div className="font-body flex flex-col items-start gap-1">
              <p className="text-sm font-medium text-[#564429]">Category: {item.category}</p>
              <p className="text-sm font-medium text-[#564429]">Rating: {item.rating}</p>
              <p className="text-sm font-medium mb-2 text-[#564429]">Price: ${item.price}</p>
            </div>
            <Quantity itemInCart={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
