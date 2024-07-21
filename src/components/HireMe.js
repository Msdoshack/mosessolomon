import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed  left-4 bottom-0 lg:right-0 lg:bottom-0 flex items-center justify-start  z-30 lg:justify-end">
      <div className="w-52 lg:w-32  md:w-28 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:msdosdarapper@gmail.com"
          className="font-bold absolute text-[#f54fff] dark:text-lightblue dark:bg-darkblue w-24 h-24 lg:w-16 lg:h-16 md:w-12 md:h-12 text-l lg:text-[12px] md:text-[10px] md:p-2 bg-dark rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center hover:text-dark hover:bg-light dark:hover:bg-light border-solid  border-2 hover:border-dark dark:hover:border-lightblue sm:p-3 "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
