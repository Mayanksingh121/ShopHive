const Footer = () => {
  return (
    <div className="bg-[#024950] w-full mt-10">
      <div className="flex justify-between items-center">
        <div className="border-b-2 border-white  w-1/3"></div>
        <div className="flex gap-4 md:gap-8">
          <a className="text-xl md:text-2xl" href="#">
            <i className="fa-brands fa-instagram text-white hover:text-pink-300"></i>
          </a>
          <a className="text-xl md:text-2xl" href="#">
            <i className="fa-brands fa-facebook text-white hover:text-blue-500"></i>
          </a>
          <a className="text-xl md:text-2xl" href="#">
            <i className="fa-brands fa-discord text-white hover:text-orange-200"></i>
          </a>
          <a className="text-xl md:text-2xl" href="#">
            <i className="fa-brands fa-linkedin text-white hover:text-blue-500"></i>
          </a>
          <a className="text-xl md:text-2xl" href="#">
            <i className="fa-brands fa-twitter text-white hover:text-blue-500"></i>
          </a>
        </div>
        <div className="border-b-2 border-white mt-1 w-1/3"></div>
      </div>
      <h2 className=" font-body font-medium mt-4 text-xl md:text-2xl text-white flex items-center justify-center ">
        ShopHive
      </h2>
      <p className="text-white text-sm flex items-center justify-center ">
        Copyright @ 2024 ShopHive, Inc.
      </p>
    </div>
  );
};

export default Footer;
