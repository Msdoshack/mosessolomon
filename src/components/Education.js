import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

import Details from "./customComponents/EducationDetails";

const Education = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-5xl w-full mb-32 text-center dark:text-lightblue md:text-4xl sm:text-2xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] lg:w-[90%] md:w-full mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-lightblue md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full d-flex flex-col items-start ml-4 justify-between xs:ml-2">
          <Details
            type="Bachelor of science"
            time="2022"
            place="Delta State University Abraka, Abraka Delta State Nigeria"
            info="PSYCHOLOGY"
          />
          <Details
            type=" Diploma"
            place="Dalot Computer School, Ijebu-Ode, Ogun state Nigeria"
            time="2012"
            info="
        ADVANCE DESKTOP PUBLISHING"
          />
          <Details type="Completed various online boot camps and courses focused on web development, including courses on React Js, Next js, React Native, Node.js, Express Js, MySql, Mongo DB and API Development to mention but few" />
          <Details type="Engaged in self-learning through documentation, online tutorials, and hands-on practice to enhance skills in front-end and back-end development." />
          <Details type="Actively pursued continuous learning and staying up-to-date with the latest industry trends and best practices in web development" />
          <Details type="Participated in coding challenges, hackathons, and online coding platforms to sharpen problem-solving and coding skills." />
          <Details type="Regularly attended web development meet ups, workshops, and conferences to network with industry professionals and gain insights into emerging technologies." />
          <Details type="Actively followed influential tech blogs, podcasts, and YouTube channels to stay informed about the latest trends and advancements in web development." />
          <Details type="Continuously worked on personal coding projects, pushing boundaries and exploring new approaches to problem-solving.." />
          {/* <Details
            type="Self Learning | Use of official Documentation"
            // place=""
            time="2020-2023"
            info={
              <div className="flex  flex-col gap-1 font-bold dark:!text-light/90 mt-2">
                <p>
                  Tailwind css <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Redux <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Bootsrap <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Vite <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Mongoose <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Node maile <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                  <span></span>
                </p>
                <p>
                  Ant design <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  Firebase <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <p>
                  data structure and algorithm <br />
                  <span className="font-light text-primary">
                    @udemy, @w3schools, @freecodecamp,@youtube
                  </span>
                </p>
                <span className="dark:text-light/75 font-thin">
                  And more .......
                </span>
              </div>
            }
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Education;
