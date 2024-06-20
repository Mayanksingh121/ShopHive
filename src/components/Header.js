import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import {toast} from "react-hot-toast";
import { toggleDarkMode, toggleOnProductsPage } from "../utils/productSlice";
import "../utils/css/navItems.css";


const Header = ({ handleCart }) => {
  const { onProductsPage, darkMode } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const handleClickHome = () => {
    dispatch(toggleOnProductsPage());
  };

  const handleDarkMode = () => {
    if (!darkMode) {
      toast("Dark Mode!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    else{
      toast("Light Mode!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "white",
          color: "black",
        },
      }); 
    }
    dispatch(toggleDarkMode());
    document.body.classList.toggle("dark");
  };

  return (
    <div className="dark:bg-[#000000] font-body flex justify-between px-5 md:px-10 py-3">
      <h2 className="font-bold text-xl md:text-2xl dark:text-white md:mx-4">ShopHive</h2>
      <div>
        <ul className="flex justify-evenly py-1 font-semibold dark:text-white">
          {!onProductsPage && (
            <Link to="about" smooth={true} duration={500}>
              <li className="hidden md:block px-4 cursor-pointer navbar-item">
                About us
              </li>
            </Link>
          )}

          {!onProductsPage && (
            <Link to="trending" smooth={true} duration={500}>
              <li className="hidden md:block px-4 cursor-pointer navbar-item">
                Trending
              </li>
            </Link>
          )}

          {onProductsPage && (
            <li
              onClick={handleClickHome}
              className="px-3 md:px-4 cursor-pointer navbar-item"
            >
              Home
            </li>
          )}

          <li onClick={handleCart} className="px-3 md:px-4 cursor-pointer navbar-item">
            Cart <i className="fa-solid fa-cart-shopping"></i>
          </li>
          {!darkMode ? (
            <li
              onClick={handleDarkMode}
              className="text-xl pl-3 md:px-4 cursor-pointer"
            >
              <FaMoon />
            </li>
          ) : (
            <li
              onClick={handleDarkMode}
              className="text-xl pl-3 md:px-4 cursor-pointer"
            >
              <FaSun />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
