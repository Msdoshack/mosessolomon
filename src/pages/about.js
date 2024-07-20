import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import picture from "../../public/images/profile/msdosGlass.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

import AnimatedNo from "@/components/customComponents/AnimatedNo";

const about = () => {
  return (
    <>
      <Head>
        <title>Moses Solomon | About page</title>
        <meta name="Moses Solomon" content="More About Moses Solomon msdos" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            Text="pressure makes diamond"
            classname="capitalize mb-16 sm:!mb-8 text-6xl lg:text-4xl md:!text-4xl sm:!text-2xl  xs:!text-2xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="sm:text-sm col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-lightblue">
                Biography
              </h2>
              <p className="font-medium dark:text-light/75">
                Hi! my name is Moses Solomon a full-stack web and cross platform
                mobile app developer with passion for creating beautiful,
                functional, and user-centered digital experiences.
              </p>

              <p className="font-medium my-4  dark:text-light/75">
                As a Full Stack Web and Mobile App Developer equipped with a
                degree in psychology, I bring a unique fusion of technical
                expertise, offering a holistic approach to crafting innovative
                digital solutions. Proficient in a wide array of programming
                languages and technologies including but not limited to HTML,
                CSS, C++, JavaScript, TypeScript, Python, Node.js, MySQL,
                MongoDB, React, React Native, Django and Next Js.
              </p>

              <p className="font-medium mb-4  dark:text-light/75">
                I specialize seamlessly in building back-end functionalities and
                its integration with front-end. My foundation in psychology
                enriches my development process, allowing me to create
                applications that not only meet technical specifications but
                also resonate with users on a psychological and emotional level.
              </p>

              <p className="font-medium mb-4  dark:text-light/75">
                Through continuous learning and staying up-to-date with the
                latest industry trends, I constantly challenge myself to push
                the boundaries of what's possible. Whether it's building
                responsive and mobile-friendly designs, architecting scalable
                applications, or delving into the intricacies of data
                manipulation, I am always eager to embrace new challenges
                head-on.
              </p>

              <p className="font-medium mb-4  dark:text-light/75">
                Whether building responsive web interfaces or dynamic mobile
                applications, my commitment to user-centric design ensures an
                optimal experience across platforms. With huge commitment in
                delivering scalable, feature-rich solutions, I thrive in
                collaborative environments, bridging the gap between technology
                and human interaction. Eager to contribute my versatile skill
                set and passion for creating impactful digital experiences to
                your development team.
              </p>

              <p className="font-medium mb-4  dark:text-light/75">
                Thank you for visiting my portfolio website, and I look forward
                to the exciting possibilities that lie ahead.
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-solid border-2 border-dark p-8 bg-light dark:bg-[#22303c] xl:col-span-4 md:order-1 md:col-span-8">
              <motion.div
                className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] "
                whileInView={{
                  backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "#1da1f2",
                    "rgba(131,58,180,1)",
                    "#121212",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              />
              <Image
                src={picture}
                alt="about-me"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px ) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex-wrap col-span-2 flex flex-col items-end justify-between lg:justify-around  lg:gap-x-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-center justify-center xl:items-center border-r-2 border-black pr-2  ">
                <span className="inline-block text-5xl font-bold dark:text-lightblue md:text-4xl sm:text-sm">
                  <AnimatedNo value={100} />%
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm ">
                  commitment
                </h2>
              </div>

              <div className="flex  flex-col items-center justify-center xl:items-center border-r-2 border-black pr-2 ">
                <span className="inline-block text-5xl font-bold dark:text-lightblue md:text-4xl sm:text-sm">
                  <AnimatedNo value={100} />%
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm ">
                  communication
                </h2>
              </div>

              <div className="flex  flex-col items-center justify-center xl:items-center border-r-2 border-black pr-2 ">
                <span className="inline-block text-5xl font-bold dark:text-lightblue md:text-4xl sm:text-sm">
                  <AnimatedNo value={100} />%
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm ">
                  innovation
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center ps-2 xl:items-center border-r-2 border-black pr-2 ">
                <span className="inline-block text-5xl font-bold  dark:text-lightblue md:text-4xl sm:text-sm mx-2">
                  <AnimatedNo value={99} />%
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm ">
                  Learning
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center xl:items-center border-r-2 border-black pr-2  ">
                <span className="inline-block text-5xl font-bold  dark:text-lightblue md:text-5xl sm:text-sm mx-2">
                  <AnimatedNo value={99} />%
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm">
                  creativity
                </h2>
              </div>

              <div className="flex flex-col gap-y-2 items-center justify-center xl:items-center  border-r-2 border-black pr-2  ">
                <span className="inline-block text-5xl font-bold   dark:text-lightblue md:text-5xl sm:text-sm lowercase">
                  <AnimatedNo value={3} />
                  yrs +
                </span>
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75 xl:text-center md:text-lg sm:text-sm xs:pr-2">
                  experience
                </h2>
              </div>
            </div>
          </div>
          <Summary />
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
