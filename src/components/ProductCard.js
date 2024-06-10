
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../utils/cartSlice";


const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product));
    toast.success("Item added to your cart!");
  };

  const handleProductDetailsClick = ()=>{
      
  }

  return (
    <div className="rounded-xl border shadow-lg w-60">
      <div className="w-60 flex items-center justify-center rounded-t-xl">
        <img className="h-36" src={product.images[0]} alt="productImage"></img>
      </div>
      <div className="p-2">
        <h3 className="font-display font-semibold h-12">{product.title}</h3>
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
          <button
            onClick={handleAddItem}
            className="bg-[#42ab9f] rounded-3xl px-3 py-2 text-black font-semibold hover:bg-[#024950] hover:text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="w-full rounded-b-xl flex justify-center">
        <Link to={"/products/" + product.id}>
          <button onClick={handleProductDetailsClick} className="cursor-pointer text-center font-body font-medium">
            Get Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
