import HOME_IMAGE from "../utils/assets/character.jpg";
import { useDispatch } from "react-redux";
import { toggleOnProductsPage } from "../utils/productSlice";
import MAIN_1 from "../utils/assets/main1.jpg"
import MAIN_2 from "../utils/assets/main2.jpg"


const MainContainer = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleOnProductsPage());
  };

  return (
    <div className="rounded-b-2xl py-3 px-5 flex justify-evenly">
      <div>
      <img
        className="rounded-3xl"
        src={HOME_IMAGE}
        alt="home"
      ></img>
      </div>
      <div className="text-center items-center py-16 px-6 flex flex-col gap-4">
        <h1 className="font-display font-bold text-6xl my-4">
          <span className="font-normal">Your </span>One-Stop Shop for <spna className="font-normal">Everything</spna>
        </h1>
        <h2 className="font-display text-xl my-4">
          Discover Incredible Deals on Clothing, Food, Perfumes, Makeup, and
          More – Delivered Right to Your Doorstep!
        </h2>
        <button
          onClick={handleButton}
          className="bg-[#f63a2f] text-white w-1/2 px-6 py-2 rounded-lg font-bold font-body"
        >
          See all
        </button>
        <h3 className="font-body flex flex-col text-xl">Special Dsicount <span className="text-xl font-bold">UP TO 50% OFF FOR ALL ITEMS</span></h3>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <img className="border-black border-[1px] rounded-3xl" src={MAIN_1} alt="main1"/>
        </div>
        <div>
          <img className="border-black border-[1px] rounded-3xl" src={MAIN_2} alt="main2"/>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
