import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Details from "./customComponents/ExperienceDetails";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-32">
      <h2
        className="font-bold text-5xl w-full mb-32 text-center dark:text-lightblue
      md:text-4xl sm:text-2xl md:mb-16 sm:mb-10"
      >
        SKILLS
      </h2>
      <div className="w-[75%] lg:w-[90%] md:w-full mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-lightblue origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full d-flex flex-col items-start ml-4 justify-between xs:ml-2">
          <Details
            companylink={"#"}
            skill="Proficient in numbers of programming languages which includes C++, JavaScript, TypeScript, Python and Go"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Proficient in various back-end technologies which includes Node Js, Express Js, Nest js, Django, fiber, MySQL and Mongodb."
            company=""
            time=""
            address=""
            work="
           "
          />
          <Details
            companylink={"#"}
            skill="Proficient in number of frontend technologies which includes; React, otstrap and many more "
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Experience with React Native for developing cross-platform mobile applications"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Proficient in Next js for server-rendered and statically generated React applications"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Experience with responsive web design and mobile-first development"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Experience with Framer Motion for creating smooth and interactive animations in React applications"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Proficient in API development with numbers of technologies such as express js, fiber, nest js and Django,"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Understanding of version control systems, such as Git"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Impressive understanding of data structures and algorithms"
            company=""
            time=""
            address=""
            work="
           "
          />

          <Details
            companylink={"#"}
            skill="Familiarity with time complexity analysis and algorithm optimization"
            company=""
            time=""
            address=""
            work="
           "
          />
        </ul>
      </div>
    </div>
  );
};

export default Skills;
