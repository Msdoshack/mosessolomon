import React from "react";
import { motion } from "framer-motion";
import Skill from "./customComponents/Skill";

const SkillSet = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-5xl mt-64 w-full text-center dark:text-lightblue md:text-4xl md:mt-32 sm:mt-20 uppercase mb-16 sm:text-2xl ">
        Technologies
      </h2>

      {/* Desktop */}
      <div className="w-[80vw] xs:hidden  h-[70vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh]  sm:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center font-semibold bg-dark dark:bg-lightblue p-3 shadow-dark dark:text-dark text-light rounded-full cursor-pointer xs:text-xs"
          whileHover={{
            scale: 1.05,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full">
            <p>Web</p>
            <hr className="w-full border-light dark:border-dark" />
            <p>Mobile</p>
          </div>
        </motion.div>
        <Skill skill="Css" x="-12.3vw" y="0vw" />
        <Skill skill="Html" x="12vw" y="-5vw" />
        <Skill skill="Javascript" x="0vw" y="8vw" />
        <Skill skill="Nest Js" x="21vw" y="4vw" />
        <Skill skill="Go" x="14vw" y="0vw" />
        <Skill skill="C++" x="-10vw" y="7vw" />
        <Skill skill="Typescript" x="0vw" y="-10vw" />
        <Skill skill="Django" x="16vw" y="-10vw" />
        <Skill skill="React Js" x="-15vw" y="-14vw" />
        <Skill skill="Next Js" x="10vw" y="14vw" />
        <Skill skill="React Native" x="30vw" y="0vw" />
        <Skill skill="Firebase" x="-4vw" y="-16.5vw" />
        <Skill skill="Redux" x="0vw" y="13vw" />
        <Skill skill="Tailwind Css" x="-25vw" y="-5vw" />
        <Skill skill="Bootstrap Css" x="-20vw" y="10vw" />
        <Skill skill="Scss" x="-27vw" y="2vw" />
        <Skill skill="Java" x="-10vw" y="16vw" />
        <Skill skill="Node Js" x="25vw" y="-12vw" />
        <Skill skill="Express Js" x="10vw" y="-15vw" />
        <Skill skill="MySql" x="12vw" y="9vw" />
        <Skill skill="Python" x="-12vw" y="-9vw" />
        <Skill skill="Mongo Db" x="29vw" y="10vw" />
      </div>

      {/* MOBILE */}
      <div className="hidden w-full relative xs:flex items-center justify-center rounded-full  h-[55vh]  bg-circularLightSm dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center font-semibold bg-dark dark:bg-lightblue p-8 shadow-dark dark:text-dark text-light rounded-full cursor-pointer
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{
            scale: 1.05,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full">
            <p>Web</p>
            <hr className="w-full border-light dark:border-dark" />
            <p>Mobile</p>
          </div>
        </motion.div>
        <Skill skill="Css" x="-12.3vw" y="0vw" />
        <Skill skill="Html" x="12vw" y="-5vw" />
        <Skill skill="Javascript" x="0vw" y="32vw" />
        <Skill skill="Nest Js" x="0vw" y="23vw" />
        <Skill skill="Go" x="23vw" y="18vw" />
        <Skill skill="C++" x="-32vw" y="12vw" />
        <Skill skill="Typescript" x="0vw" y="-25vw" />
        <Skill skill="Django" x="26vw" y="-18vw" />
        <Skill skill="React Js" x="-26vw" y="-25vw" />
        <Skill skill="Next Js" x="24vw" y="28vw" />
        <Skill skill="React Native" x="30vw" y="0vw" />
        <Skill skill="Firebase" x="-4vw" y="-38.5vw" />
        <Skill skill="Redux" x="0vw" y="43vw" />
        <Skill skill="Tailwind Css" x="-29vw" y="-9vw" />
        <Skill skill="Bootstrap" x="-25vw" y="22vw" />
        <Skill skill="Scss" x="-33vw" y="2vw" />
        <Skill skill="Java" x="-23vw" y="36vw" />
        <Skill skill="Node Js" x="-15vw" y="12vw" />
        <Skill skill="Express Js" x="16vw" y="-33vw" />
        <Skill skill="MySql" x="4vw" y="12vw" />
        <Skill skill="Python" x="-2vw" y="-13vw" />
        <Skill skill="Mongo Db" x="29vw" y="10vw" />
      </div>
    </section>
  );
};

export default SkillSet;
