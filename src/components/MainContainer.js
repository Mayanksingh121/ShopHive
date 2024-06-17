import HOME_IMAGE from "../utils/assets/character.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleOnProductsPage } from "../utils/productSlice";
import MAIN_1 from "../utils/assets/main1.jpg";
import MAIN_2 from "../utils/assets/main2.jpg";

const MainContainer = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.product.darkMode);

  const handleButton = () => {
    dispatch(toggleOnProductsPage());
  };

  return (
    <div
      className={`${
        darkMode ? "dark:bg-[#111111]" : ""
      } pt-4 px-3 md:py-3 md:px-5 flex justify-evenly gap-3 md:gap-0`}
    >
      <div className="hidden md:flex">
        <img className="rounded-3xl border border-white" src={HOME_IMAGE} alt="home"></img>
      </div>
      <div className="text-center items-center lg:py-16 md:px-2 lg:px-6 flex flex-col gap-2 md:gap-4">
        <h1 className="font-display dark:text-white font-bold md:text-xl lg:text-6xl md:my-4">
          <span className="font-normal">Your </span>One-Stop Shop for{" "}
          <span className="font-normal">Everything</span>
        </h1>
        <h2 className="dark:text-white font-display text-sm md:text-lg lg:text-xl md:my-2 lg:my-4">
          Discover Incredible Deals on Clothing, Food, Perfumes, Makeup, and
          More – Delivered Right to Your Doorstep!
        </h2>
        <button
          onClick={handleButton}
          className="bg-[#f63a2f] text-white w-1/2 px-6 py-2 rounded-lg font-bold font-body"
        >
          See all
        </button>
        <h3 className="dark: text-white font-body flex flex-col text-sm md:text-lg lg:text-xl">
          Special Dsicount{" "}
          <span className="md:text-xl font-bold">
            UP TO 50% OFF FOR ALL ITEMS
          </span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <img
            className="border-black dark:border-white border-[1px] rounded-3xl"
            src={MAIN_1}
            alt="main1"
          />
        </div>
        <div>
          <img
            className="border-black dark:border-white border-[1px] rounded-3xl"
            src={MAIN_2}
            alt="main2"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
