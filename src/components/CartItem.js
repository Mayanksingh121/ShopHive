import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleRemoveFromCart = ()=>{
        dispatch(removeFromCart(item));
    }

  return (
    <div className="w-full border-[1px] border-gray-300 rounded-xl shadow-lg pr-4">
      <div className="pt-4">
        <i onClick={handleRemoveFromCart} className="flex justify-end fa-solid fa-xmark cursor-pointer"></i>
      </div>
      <div className="flex">
        <div className="w-[40%] flex justify-center">
          <img className="h-48" src={item.images[0]} alt="item" />
        </div>
        <div className="flex flex-col">
          <div className="w-full text-center">
            <h2 className="font-body font-bold text-xl">{item.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
