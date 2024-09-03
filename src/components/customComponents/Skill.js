import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skill, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center sm:bg-inherit sm:text-dark bg-dark font-semibold dark:bg-lightblue dark:sm:bg-inherit dark:sm:text-lightblue text-light dark:text-dark py-1 px-2 sm:px-0 sm:py-0 shadow-dark  rounded-full cursor-pointer absolute  md:text-sm  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:text-sm sm:capitalize 
      m-3"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      {skill}
    </motion.div>
  );
};
// dark:bg-lightblue

export default Skill;
