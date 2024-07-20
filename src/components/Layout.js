import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`h-full w-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-5 dark:bg-[#15202b] ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
