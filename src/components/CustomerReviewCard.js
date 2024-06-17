const CustomerReviewCard = ({ review }) => {
  return (
    <div className="hover:bg-gradient-to-br hover:from-red-200 hover:text-black hover:via-purple-200 hover:to-yellow-200 border p-5 shadow-lg  md:hover:translate-y-2 transition ease-in-out rounded-lg">
      <i className="fa-solid fa-quote-left fa"></i>
      <div className="">
        <i className="text-yellow-300 fa-solid fa-star"></i>
        <i className="text-yellow-300 fa-solid fa-star"></i>
        <i className="text-yellow-300 fa-solid fa-star"></i>
        <i className="text-yellow-300 fa-solid fa-star"></i>
        <i className="text-yellow-300 fa-solid fa-star-half-stroke"></i>
      </div>
      <p className="font-body">{review.comment}</p>
      <div className="flex justify-end mt-4">
        <h3 className="font-display font-medium">{review.name}</h3>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
