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
    <div className=" font-body flex justify-between bg-[#59cbbf] text-[#153a5b] px-10 py-3">
      <h2 className="font-bold text-2xl mx-4">ShopHive</h2>
      <div>
        <ul className="flex justify-evenly  py-1">
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
