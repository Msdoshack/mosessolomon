import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] font-semibold inline-block bg-dark dark:bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href
            ? "w-full !bg-[#0fec0f] dark:!bg-lightblue"
            : "w-0 bg-dark dark:bg-light"
        }`}
      />
      &nbsp;
    </Link>
  );
};
export default CustomLink;
