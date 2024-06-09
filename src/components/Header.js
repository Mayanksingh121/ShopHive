import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleOnProductsPage } from "../utils/productSlice";
import "../utils/css/navItems.css";

const Header = ({ handleCart }) => {
  const productPage = useSelector((store) => store.product.onProductsPage);
  const dispatch = useDispatch();

  const handleClickHome = () => {
    dispatch(toggleOnProductsPage());
  };

  return (
    <div className=" border-black border-b-2 font-display bg-[#024950] flex justify-between text-white px-10 py-5">
      <h2 className="font-bold text-3xl mx-4">ShopHive</h2>
      <div className="">
        <ul className="flex justify-evenly text-xl py-1">
          {!productPage && (
            <Link to="about" smooth={true} duration={500}>
              <li className="hidden md:block px-4 cursor-pointer navbar-item">
                About us
              </li>
            </Link>
          )}

          {!productPage && (
            <Link to="trending" smooth={true} duration={500}>
              <li className="hidden md:block px-4 cursor-pointer navbar-item">
                Trending
              </li>
            </Link>
          )}

          {productPage && (
            <li
              onClick={handleClickHome}
              className="hidden md:block px-4 cursor-pointer navbar-item"
            >
              Home
            </li>
          )}

          <li
            onClick={handleCart}
            className="hidden md:block px-4 cursor-pointer navbar-item"
          >
            Cart <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="cursor-pointer">
            <i className="md:hidden fa-solid fa-bars cursor-pointer"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
