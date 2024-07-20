import React from "react";
import { motion } from "framer-motion";
import Skill from "./customComponents/Skill";

const Summary = () => {
  return (
    <section>
      <h2 className="font-bold text-5xl mt-64 w-full text-center dark:text-lightblue md:text-4xl md:mt-32 sm:mt-20 uppercase mb-16 sm:text-2xl ">
        skill set
      </h2>
      <div className="w-full  h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh]  sm:h-[70vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm">
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
        <Skill skill="Javascript" x="0vw" y="16vw" />
        <Skill skill="Nest Js" x="19vw" y="16vw" />
        <Skill skill="C++" x="-10vw" y="7vw" />
        <Skill skill="Typescript" x="0vw" y="-16vw" />
        <Skill skill="Django" x="16vw" y="-18vw" />
        <Skill skill="React Js" x="-21vw" y="-19vw" />
        <Skill skill="Next Js" x="20vw" y="22vw" />
        <Skill skill="React Native" x="30vw" y="0vw" />
        <Skill skill="Firebase" x="-4vw" y="-23.5vw" />
        <Skill skill="Redux" x="0vw" y="27vw" />
        <Skill skill="Tailwind Css" x="-29vw" y="-9vw" />
        <Skill skill="Bootstrap Css" x="-25vw" y="13vw" />
        <Skill skill="Scss" x="-27vw" y="2vw" />
        <Skill skill="Java" x="-19vw" y="23vw" />
        <Skill skill="Node Js" x="25vw" y="-12vw" />
        <Skill skill="Express Js" x="16vw" y="-23vw" />
        <Skill skill="MySql" x="12vw" y="9vw" />
        <Skill skill="Python" x="-12vw" y="-9vw" />
        <Skill skill="Mongo Db" x="29vw" y="10vw" />
      </div>
    </section>
  );
};

export default Summary;
