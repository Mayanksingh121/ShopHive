import { useSelector } from "react-redux";
import CustomerReviewCard from "./CustomerReviewCard";

const CustomerReviews = () => {
  const darkMode = useSelector((store) => store.product.darkMode);

  return (
    <div
      className={`${
        darkMode ? "dark:bg-[#000000]" : ""
      } flex flex-col p-4 pb-10 md:pb-20`}
    >
      <h2 className="dark:text-white font-display text-xl md:text-2xl px-6">
        Customer Reviews
      </h2>
      <div className="dark:text-white mt-2">
        <CustomerReviewCard />
      </div>
    </div>
  );
};

export default CustomerReviews;
