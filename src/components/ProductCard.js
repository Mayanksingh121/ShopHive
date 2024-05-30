const ProductCard = ({ product }) => {
  return (
    <div className="rounded-xl border shadow-lg w-60">
      <div className="bg-[#54c8bb] w-60 flex items-center justify-center rounded-t-xl">
        <img className="h-36" src={product.images[0]} alt="productImage"></img>
      </div>
      <div className="p-2">
        <h3 className="font-display font-semibold">{product.title}</h3>
        <p>
          <span className="mr-2 px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
            {product.tags[0]}
          </span>
          <span className="px-2 py-1 rounded-xl text-sm border border-[#d8f1ee]">
            {product.tags[1]}
          </span>
        </p>
        <div className="flex justify-between items-center my-4">
          <p className="font-bold text-lg">${product.price}</p>
          <button className="bg-[#54c8bb] rounded-3xl px-3 py-2 text-black font-semibold hover:bg-[#024950] hover:text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
