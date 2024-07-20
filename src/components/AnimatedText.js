import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const wordEffect = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

const AnimatedText = ({ Text, classname }) => {
  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize ${classname}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {Text.split(" ").map((word, i) => (
          <motion.span
            key={word + "-" + i}
            className="inline-block"
            variants={wordEffect}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
