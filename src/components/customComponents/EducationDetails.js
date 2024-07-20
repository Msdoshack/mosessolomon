import React, { useRef } from "react";
import LiIcons from "../LiIcons";
import { motion } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb:0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-base  dark:text-light/75">
          {type}
        </h3>
        <div className="font-bold w-full  dark:text-light/95 md:text-sm ">
          {info}
        </div>

        <span className="capitalize font-medium text-dark/75 dark:text-light/70 sm:text-sm">
          {place} {time}
        </span>
      </motion.div>
    </li>
  );
};

export default Details;
