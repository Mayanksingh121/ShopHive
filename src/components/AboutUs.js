import {
  PRESENT_STATISTICS,
  SECOND_HEADING,
  ABOUTUS_SECOND,
  ABOUTUS_FIRST,
} from "../utils/constants";
import Statistics from "./Statistics";
import ABOUT_US from "../utils/assets/aboutUs.png";
import "aos/dist/aos.css";
import ChartData from "./ChartData";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const imageVariant = {
  upDown: {
    y: [0, 40, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  const darkMode = useSelector((store) => store.product.darkMode);

  //animation on scroll
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // data-aos-duration="1500"
  //     data-aos="fade-down"
  //     id="about"

  return (
    <div
      className={`${
        darkMode ? "dark:bg-[#111111]" : ""
      } flex md:grid grid-cols-12 pt-5 p-2`}
    >
      <div className="dark:text-white col-span-8 p-2 md:p-4">
        <h2 className="font-display text-xl md:text-2xl">About us</h2>
        <p className="font-body pt-6 pb-3">{ABOUTUS_FIRST}</p>
        <p className="font-display text-xl py-4">{SECOND_HEADING}</p>
        <p className="font-body ">{ABOUTUS_SECOND}</p>

        <div className="grid grid-cols-2 py-6 gap-4">
          {PRESENT_STATISTICS.map((data) => {
            return <Statistics key={data.key} stats={data} />;
          })}
        </div>
      </div>
      <div className="flex h-full gap-20 flex-col items-center col-span-4">
        <motion.div
          className="hidden md:flex justify-center mt-6 border-2 bg-[#ff0000]   rounded-full"
          variants={imageVariant}
          animate="upDown"
        >
          <img className="h-56 rounded-full" src={ABOUT_US} alt="about"></img>
        </motion.div>
        <div className="w-full relative bottom-0">
          <ChartData />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
