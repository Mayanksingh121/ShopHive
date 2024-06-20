import { useDispatch } from "react-redux";
import { removeFromCart } from "../../utils/cartSlice";
import Quantity from "./Quantity";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="w-full border-[1px] dark:bg-[#19191a] border-gray-300 dark:border-[#1b1b1c]  rounded-xl shadow-lg pr-2">
      <div className="pt-1">
        <i
          onClick={handleRemoveFromCart}
          className="text-black dark:text-white flex justify-end fa-solid fa-xmark cursor-pointer"
        ></i>
      </div>
      <div className="flex">
        <div className="w-[40%] flex justify-center">
          <img className="h-36 md:h-44" src={item.images[0]} alt="item" />
        </div>
        <div className="w-[60%] flex flex-col">
          <div>
            <h2 className="dark:text-white font-body font-bold text-medium md:text-xl mb-2">
              {item.title}
            </h2>
            <div className="font-body flex flex-col items-start gap-1 text-[#564429] dark:text-white">
              <p className="text-xs md:text-sm font-medium ">
                Category: {item.category}
              </p>
              <p className="text-xs md:text-sm font-medium">
                Rating: {item.rating}
              </p>
              <p className="text-xs md:text-sm font-medium mb-2">
                Price: ${item.price}
              </p>
            </div>
            <Quantity itemInCart={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
