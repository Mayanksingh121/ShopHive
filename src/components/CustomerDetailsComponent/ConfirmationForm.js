import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ConfirmationForm = () => {
  const cartItems = useSelector((store) => store.cart?.cartItems);

  const getTotalPrice = (acc, curr) => {
    const quantity = curr.quantity;
    acc += quantity * curr.price;
    return acc;
  };

  const totalPrice = cartItems?.reduce(getTotalPrice, 0).toFixed();

  const handleClick = () => {
    if (cartItems.length === 0) {
      return;
    } else {
      toast.success("Order placed");
    }
  };

  return (
    <div className="flex items-center flex-col font-body">
      <h3 className="text-[#4f4332] text-lg font-bold dark:text-white">Confirm your order</h3>
      <div className="w-full border border-black my-4 rounded-xl px-1 md:px-2 py-3 dark:text-white">
        {cartItems.length === 0 ? (
          <p className="text-center text-[#4f4332] font-bold text-lg">
            Your Cart is Empty! Check your cart
          </p>
        ) : (
          cartItems.map((item) => {
            return (
              <div className="flex justify-between" key={item.id}>
                <h2 className="text-xs md:text-base">{item.title}</h2>
                <p className="text-xs md:text-base">Quantity: {item.quantity}</p>
              </div>
            );
          })
        )}
      </div>
      <div className="w-full flex justify-end dark:text-white">
        <p className="font-semibold">Total bill: ${totalPrice}</p>
      </div>
      <Link to="/">
        <button
          onClick={handleClick}
          className="bg-[#0074c3] text-white px-4 py-2 font-bold rounded-lg"
        >
          {cartItems.length > 0 ? "Place order" : "Check your Cart"}
        </button>
      </Link>
    </div>
  );
};

export default ConfirmationForm;
