import { useSelector } from "react-redux";
import { CUSTOMER_REVIEWS } from "../utils/constants";
import CustomerReviewCard from "./CustomerReviewCard";

const CustomerReviews = () => {
  const darkMode = useSelector(store=>store.product.darkMode);

  return (
    <div className={`${darkMode ? "dark:bg-[#111111]":""} flex flex-col p-4 md:px-6 pb-20`}>
      <h2 className="dark:text-white font-display text-xl md:text-2xl">
        Customer Reviews
      </h2>
      <div className="dark:text-white flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-3 gap-4 mt-4 ">
        {CUSTOMER_REVIEWS.map((review) => {
          return <CustomerReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default CustomerReviews;
