import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 lg:w-12 lg:h-12 sm:w-10 sm:h-10   dark:bg-lightblue bg-dark flex text-light items-center justify-center  rounded-full text-2xl lg:text-xl sm:text-lg font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MS
      </MotionLink>
    </div>
  );
};

export default Logo;
