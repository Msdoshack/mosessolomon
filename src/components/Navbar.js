import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

import CustomLink from "./customComponents/CustomLink";
import CustomMobileLink from "./customComponents/CustomMobileLink";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isProjectsRoute = router?.pathname === "/project";

  const [mode, setMode] = useThemeSwitcher();

  const handleHamburger = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-32 py-6 font-medium flex items-center justify-between border-dark/10  dark:border-light/10  border-b-2  lg:px-16 md:px-12 sm:px-8 sticky top-0 z-40 bg-light dark:bg-darkblue">
      <button
        className="lg:flex flex-col justify-center items-center hidden z-30"
        onClick={handleHamburger}
      >
        <span
          className={`bg-dark block dark:bg-light transition-all duration-300 h-0.5 w-6 rounded-sm " ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>

        <span
          className={`bg-dark block dark:bg-light transition-all duration-300 h-0.5 w-6 my-0.5 rounded-sm ${
            isOpen ? "opacity-0 my-0.5" : "opacity-100 my-1"
          }`}
        ></span>

        <span
          className={`bg-dark block dark:bg-light transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav
          className="z-30 text-dark text-xl 
           dark:text-light font-medium"
        >
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="ml-4" />
          <CustomLink href="/project" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap z-30 ">
          <motion.a
            className="mx-1 w-6"
            href="https://www.linkedin.com/"
            target="_blank"
            whileHover={{
              y: -4,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            className="mx-1 w-6"
            href="https://www.github.com/"
            target="_blank"
            whileHover={{
              y: -4,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            className="mx-1 w-6 "
            href="https://www.dribble.com/"
            target="_blank"
            whileHover={{
              y: -4,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              alt="fb logo"
              src={"/Facebook_Logo.png"}
              className="w-6 h-6"
              width={4}
              height={4}
            />
          </motion.a>

          <motion.a
            className="mx-1  w-6"
            href="https://www.twitter.com/"
            target="_blank"
            whileHover={{
              y: -4,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              alt="x logo"
              src={"/X_logo.png"}
              width={5}
              height={5}
              className={"w-5 h-5 bg-black"}
            />
          </motion.a>

          <button
            className="ml-10 flex items-center justify-center rounded-full bg-light p-1"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="hidden min-w-[70vw] sm:flex flex-col items-center justify-between fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-30 dark:bg-light/75 bg-dark/90 backdrop-blur-md rounded-lg py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav
            className={`${
              isProjectsRoute ? "z-30 text-light font-semibold " : ""
            } dark:text-dark semi:bold flex flex-col items-center justify-center `}
          >
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleHamburger}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="my-4"
              toggle={handleHamburger}
            />
            <CustomMobileLink
              href="/project"
              title="Projects"
              className="mb-4"
              toggle={handleHamburger}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap z-30 ">
            <motion.a
              className="sm:mx-1 mx-3 w-6"
              href="https://www.linkedin.com/in/solomon-moses-4981b4105"
              target="_blank"
              whileHover={{
                y: -4,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              className="sm:mx-1 mx-3 w-6"
              href="https://www.github.com/"
              target="_blank"
              whileHover={{
                y: -4,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              className="sm:mx-1 mx-3 w-6 "
              href="https://www.facebook.com/msdosr"
              target="_blank"
              whileHover={{
                y: -4,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                alt="fb logo"
                src={"/Facebook_Logo.png"}
                className="w-6 h-6"
                width={4}
                height={4}
              />
            </motion.a>

            <motion.a
              className="sm:mx-1 mx-3  w-6"
              href="https://x.com/Msdos_rapper"
              target="_blank"
              whileHover={{
                y: -4,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                alt="x logo"
                src={"/X_logo.png"}
                width={5}
                height={5}
                className={"w-5 h-5 bg-black"}
              />
            </motion.a>

            <button
              className="ml-10 flex items-center justify-center rounded-full bg-light p-1"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-[50%]  -translate-y-[50%] -translate-x-[-50%] z-30">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
