import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-darkblue z-50"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-40 w-screen h-screen bg-light"
        initial={{ width: "100%", x: "100%" }}
        animate={{ width: "0%", x: "0%" }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full z-30 w-screen h-screen bg-dark"
        initial={{ width: "100%", x: "100%" }}
        animate={{ width: "0%", x: "0%" }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
      />
    </>
  );
};

export default TransitionEffect;
