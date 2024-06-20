import { Link } from "react-router-dom";

const BillContainer = ({ items }) => {
  const getTotalPrice = (acc, curr) => {
    const quantity = curr.quantity;
    acc += quantity * curr.price;
    return acc;
  };

  const getTotalItems = (acc, curr) => {
    acc = acc + curr.quantity;
    return acc;
  };

  const totalItems = items.reduce(getTotalItems, 0);
  const totalPrice = items.reduce(getTotalPrice, 0).toFixed();

  return (
    <>
      <div className="w-full border-b-[1px] border-gray-300 pb-3">
        <h2 className="text-lg font-semibold text-center">Your Bill</h2>
      </div>
      <div>
        <div className="flex justify-between py-2 px-2">
          <h2 className="font-body text-sm">Total Items:</h2>
          <h2 className="font-body text-sm">{totalItems}</h2>
        </div>
        <div className="flex justify-between px-2">
          <h2 className="font-body text-xs">Subtotal:</h2>
          <h2 className="font-body text-xs">${totalPrice}</h2>
        </div>
        <div className="flex justify-between px-2 border-b-[1px] border-gray-300 pb-2">
          <h2 className="font-body text-xs">Delivery:</h2>
          <h2 className="font-body text-xs">$0</h2>
        </div>
        <div className="flex justify-between px-2 py-2">
          <h2 className="font-body text-lg">Total:</h2>
          <h2 className="font-body text-lg">${totalPrice}</h2>
        </div>
        <div className="text-center pt-2 pb-4">
          {items.length > 0 && (
            <Link to="/customerDetails">
              <button className="font-semibold font-body text-white  bg-[#6c63fe] px-10 py-1 md:px-20 md:py-2 rounded-full ">
                Checkout
              </button>
            </Link>
          )}
          <p className="py-2 font-body text-sm font-medium">
            This Site is protected by google Privacy Policy and Terms of
            Services.
          </p>
        </div>
      </div>
    </>
  );
};

export default BillContainer;
