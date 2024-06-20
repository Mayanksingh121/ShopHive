import BillContainer from "./BillContainer";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { motion } from "framer-motion";
import EMPTY from "../../utils/assets/empty.png";

const CartModal = ({ handleCart }) => {
  const items = useSelector((store) => store.cart?.cartItems);
  const darkMode = useSelector((store) => store.product.darkMode);

  return (
    <motion.div
      className="fixed z-50 w-full h-full bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 0.1 }}
    >
      <div
        className={`${
          darkMode ? "dark:bg-[#232222]" : ""
        }  dark:text-white bg-white w-[90%] rounded-xl md:w-[80%] h-[80%] md:h-[90%] mx-auto my-8 overflow-y-scroll`}
      >
        <div>
          <div className="flex justify-between mx-6 mt-5">
            <h2 className="font-display font-bold text-xl">Your Cart</h2>
            <span className="cursor-pointer" onClick={handleCart}>
              <i className="fa-solid fa-xmark text-xl"></i>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mx-10 my-4 gap-8">
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
                  <img className="w-72" src={EMPTY} alt="empty" />
                </div>
              )}
            </div>
            <motion.div
              className="dark:bg-[#19191a] dark:text-white h-72 w-full md:w-[70%] border border-[#1c1c1d] rounded-xl shadow-xl px-5 py-3"
              initial={{ x: 450 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BillContainer items={items} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartModal;
