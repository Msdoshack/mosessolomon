import React, { useRef } from "react";
import { motion } from "framer-motion";
import LiIcons from "../LiIcons";

const Details = ({ skill }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb:0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-xl sm:text-sm dark:text-light/75 ">
          {skill}&nbsp;
        </h3>
      </motion.div>
    </li>
  );
};

export default Details;
