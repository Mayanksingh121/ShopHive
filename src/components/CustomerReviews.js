import { CUSTOMER_REVIEWS } from "../utils/constants";
import CustomerReviewCard from "./CustomerReviewCard";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col p-6">
      <h2 className="font-display text-2xl">
        Customer Reviews
      </h2>
      <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-3 gap-4 mt-4 ">
        {CUSTOMER_REVIEWS.map((review) => {
          return <CustomerReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default CustomerReviews;
