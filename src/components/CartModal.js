import { useEffect, useState } from "react";
import BillContainer from "./BillContainer";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EMPTY from "../utils/assets/empty.jpg";

const CartModal = ({ handleCart }) => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const items = useSelector((store) => store.cart?.cartItems);

  return (
    <div
      className={`fixed z-50 w-full h-full bg-black bg-opacity-60 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-[80%] h-[90%] mx-auto my-8 overflow-y-scroll transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "-translate-y-40"
        }`}
      >
        <div>
          <div className="flex justify-between mx-6 mt-5">
            <h2 className="font-display font-bold text-xl">Your Cart</h2>
            <span className="cursor-pointer" onClick={handleCart}>
              <i className="fa-solid fa-xmark text-xl"></i>
            </span>
          </div>

          <div className="flex justify-between mx-10 my-4 gap-8">
            <div className="w-full flex flex-col gap-4">
              {items.length > 0 ? (
                items.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })
              ) : (
                <div className="flex flex-col items-center w-full gap-6">
                  <p className="font-body font-medium text-xl">
                    Your cart is empty
                  </p>
                  <img className="w-56" src={EMPTY} alt="empty" />
                </div>
              )}
            </div>
            <div className="h-72 w-[70%] border border-gray-300 rounded-xl shadow-xl px-5 py-3">
              <BillContainer items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
