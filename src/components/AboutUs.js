import {
  PRESENT_STATISTICS,
  SECOND_HEADING,
  ABOUTUS_SECOND,
  ABOUTUS_FIRST,
} from "../utils/constants";
import Statistics from "./Statistics";
import ABOUT_US from "../utils/assets/aboutUs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ChartData from "./ChartData";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos-duration="1500" data-aos="fade-down" id="about" className="flex md:grid grid-cols-12 mt-5 p-2">
      <div className="col-span-8 p-2 md:p-4">
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
      <div className="flex flex-col gap-10 col-span-4">
      <div className="hidden md:flex justify-center mt-6 ">
        <img className="h-44" src={ABOUT_US} alt="about"></img>
      </div>
      <div>
       <ChartData/>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
