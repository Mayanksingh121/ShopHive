import React from "react";

const ProductReviewCard = ({ review }) => {
  return (
    <div className="shadow-xl w-1/3 dark:bg-[#19191a] dark:border-[#202021] flex flex-col justify-center font-body rounded-lg border px-2 py-2 mb-2">
      <div className="flex gap-4 justify-between items-center">
        <p className="text-lg font-medium">{review.reviewerName}</p>
        <p>Rating: {review.rating}/5</p>
      </div>
      <p className="flex justify-center">
        <i className="px-1 fa-solid fa-quote-left fa"></i>
        {review.comment}
        <i className="px-1 fa-solid fa-quote-right fa"></i>
      </p>
    </div>
  );
};

export default ProductReviewCard;
