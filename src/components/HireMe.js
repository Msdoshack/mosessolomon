import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-0 lg:right-8 md:top-[30%] lg:-translate-y-[30%] lg:left-auto lg:bottom-auto flex items-center justify-center overflow-hidden sm:right-0 z-30">
      {/* md:absolute  */}
      <div className="w-52 md:w-28 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:msdosdarapper@gmail.com"
          className="font-bold absolute text-[#f54fff] dark:text-lightblue dark:bg-darkblue w-24 h-24 md:w-12 md:h-12 text-l md:text-[10px] md:p-2 bg-dark rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center hover:text-dark hover:bg-light dark:hover:bg-light border-solid  border-2 hover:border-dark dark:hover:border-lightblue sm:p-3 "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
