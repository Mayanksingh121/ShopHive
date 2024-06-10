import HOME_IMAGE from "../utils/assets/home_image.jpg";
import { useDispatch } from "react-redux";
import { toggleOnProductsPage } from "../utils/productSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleOnProductsPage());
  };

  return (
    <div className="rounded-b-2xl py-10 px-5 bg-[#59cbbf] flex">
      <img
        className="w-1/2 rounded-lg "
        src={HOME_IMAGE}
        alt="home"
      ></img>
      <div className="text-center py-16 px-6">
        <h1 className="font-display text-[#153a5b] font-bold text-2xl my-4">
          Your One-Stop Shop for Everything
        </h1>
        <h2 className="font-display text-[#153a5b] font-semibold text-xl my-4">
          Discover Incredible Deals on Clothing, Food, Perfumes, Makeup, and
          More – Delivered Right to Your Doorstep!
        </h2>
        <button
          onClick={handleButton}
          className="border border-[#153a5b] text-[#153a5b] p-4 hover:border-2 mt-2"
        >
          See all
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
