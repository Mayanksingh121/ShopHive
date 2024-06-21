import PersonalInfo from "./PersonalInfo";
import DELIVERY from "../../utils/assets/delivery.png";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import AddressForm from "./AddressForm";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmationForm from "./ConfirmationForm";
import HOME from "../../utils/assets/house.png";

const CustomerDetails = () => {
  const [formNumber, setFormNumber] = useState(0);

  const handleFormSubmit = () => {
    setFormNumber((formNumber) => formNumber + 1);
  };

  const formVariants = {
    initial: { opacity: 0, x: 88 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -88 },
  };

  return (
    <div className="dark:bg-[#000000] w-full h-[100%] flex">
      <div className="rounded-e-3xl hidden dark:bg-white z-20 w-[40%] lg:w-1/2 border-r h-[100%] gap-16 md:flex flex-col items-center py-20">
        <div className="text-center">
          <p className="font-bold text-2xl">Tell us about yourself</p>
          <p className="font-semibold text-lg">
            Receive amazing products at your doorstep
          </p>
        </div>

        <div className="relative h-96  w-full">
          <img className="absolute w-full bottom-0" src={HOME} alt="" />
          <img className="absolute bottom-0 w-80" src={DELIVERY} alt="" />
        </div>
      </div>
      <div className="w-full md:w-[60%] lg:w-1/2 h-screen px-6 md:px-2 lg:px-12 py-4">
        <div className="flex justify-between font-display font-semibold text-xs md:text-sm">
          <div
            className={`${
              formNumber >= 0 ? "border-b-[#0074c3]" : "border-b-white"
            } flex items-center pb-1 gap-1 md:gap-2 border-b-[6px]`}
          >
            <p className="dark:text-white">Personal Info</p>
            <span
              className={`${
                formNumber >= 1 ? "text-[#00ae3b]" : "text-[#d6d1d1]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
          <div
            className={`${
              formNumber >= 1 ? "border-b-[#0074c3]" : "border-b-white"
            } flex items-center pb-1  gap-2 border-b-[6px]`}
          >
            <p className="dark:text-white">Add Adderess</p>
            <span
              className={`${
                formNumber >= 2 ? "text-[#00ae3b]" : "text-[#d6d1d1]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
          <div
            className={`${
              formNumber >= 2 ? "border-b-[#0074c3]" : "border-b-white"
            } flex items-center pb-1 gap-2 border-b-[6px]`}
          >
            <p className="dark:text-white">Confirm order</p>
            <span
              className={`${
                formNumber >= 3 ? "text-[#00ae3b]" : "text-[#d6d1d1]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
        </div>
        <div className="pt-10 px:3 lg:px-6">
          <div className="px-2 md:px-4">
            <h2 className="text-[#3f3f3f] dark:text-white font-bold text-xl font-display">
              Hi user, welcome to ShopHive!
            </h2>
            <p className="text-xs text-[#636262] dark:text-white font-semibold flex items-center gap-2 my-2">
              <MdEmail /> <span>shophive95@gmail.com</span>
            </p>
          </div>
          <div className="my-10 mx-4">
            <AnimatePresence mode="wait">
              {formNumber === 0 && (
                <motion.div
                  className="w-full"
                  key="personal-info"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                >
                  <PersonalInfo onSubmit={handleFormSubmit} />
                </motion.div>
              )}
              {formNumber === 1 && (
                <motion.div
                  key="address"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ opacity: { duration: 0.2 } }}
                >
                  <AddressForm onSubmit={handleFormSubmit} />
                </motion.div>
              )}
              {formNumber === 2 && (
                <motion.div
                  key="confirm"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ConfirmationForm onSubmit={handleFormSubmit} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
