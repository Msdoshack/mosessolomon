import { useRouter } from "next/router";
import React from "react";

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] font-semibold inline-block bg-dark dark:bg-darkblue  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href
            ? "w-full !bg-[#0fec0f] dark:!bg-lightblue"
            : "w-0 bg-dark dark:bg-light"
        }`}
      />
      &nbsp;
    </button>
  );
};

export default CustomMobileLink;
