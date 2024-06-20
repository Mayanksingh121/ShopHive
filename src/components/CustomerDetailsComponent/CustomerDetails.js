import PersonalInfo from "./PersonalInfo";
import FORM_IMAGE from "../../utils/assets/form.png";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import AddressForm from "./AddressForm";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmationForm from "./ConfirmationForm";

const CustomerDetails = () => {
  const [formNumber, setFormNumber] = useState(0);

  const handleFormSubmit = () => {
    setFormNumber((formNumber) => formNumber + 1);
  };

  const formVariants = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 1 },
    exit: { opacity: 0, x: -300 },
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 border-r-2">
        <img className="h-full " src={FORM_IMAGE} alt="" />
      </div>
      <div className="w-1/2 px-12 py-4">
        <div className="flex justify-between font-display font-semibold text-sm">
          <div className="flex items-center gap-2">
            Add personal Info{" "}
            <span
              className={`${
                formNumber >= 1 ? "text-[#00ae3b]" : "text-[#9f9c9c]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
          <div className="flex items-center gap-2">
            Add Adderess{" "}
            <span
              className={`${
                formNumber >= 2 ? "text-[#00ae3b]" : "text-[#9f9c9c]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
          <div className="flex items-center gap-2">
            Confirm order{" "}
            <span
              className={`${
                formNumber >= 3 ? "text-[#00ae3b]" : "text-[#9f9c9c]"
              } `}
            >
              <FaCheckCircle />
            </span>
          </div>
        </div>
        <div className="py-10 px-10">
          <div>
            <h2 className="text-[#3f3f3f] font-bold text-xl font-display">
              Hi user, welcome to ShopHive!
            </h2>
            <p className="text-xs text-[#636262] font-semibold flex items-center gap-2 my-2">
              <MdEmail /> <span>shophive95@gmail.com</span>
            </p>
          </div>
          <div className="my-10">
            <AnimatePresence mode="wait">
              {formNumber === 0 && (
                <motion.div
                  key="personal-info"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <PersonalInfo onSubmit={handleFormSubmit} />
                </motion.div>
              )}
              {formNumber === 1 && (
                <motion.div
                  key="personal-info"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <AddressForm onSubmit={handleFormSubmit} />
                </motion.div>
              )}
              {formNumber === 1 && (
                <motion.div
                  key="personal-info"
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
