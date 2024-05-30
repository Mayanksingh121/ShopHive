import React from "react";

const Header = () => {
  return (
    <div className=" border-black border-b-2 font-display bg-[#024950] flex justify-between text-white px-10 py-5">
      <h2 className="font-bold text-3xl mx-4 hover:text-[#63cec4]">ShopHive</h2>
      <div className="">
        <ul className="flex justify-evenly text-xl py-1">
          <li className="hidden md:block px-4 hover:text-[#63cec4] cursor-pointer">
            About us
          </li>
          <li className="hidden md:block px-4 hover:text-[#63cec4] cursor-pointer">
            Trending
          </li>
          <li className="hidden md:block px-4 hover:text-[#63cec4] cursor-pointer">
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
