import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import project1 from "../../public/images/projects/agency-website-cover-image.jpg";
import project2 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project3 from "../../public/images/projects/fashion-studio-website.jpg";
import project4 from "../../public/images/projects/portfolio-cover-image.jpg";
import project5 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProject from "@/components/customComponents/FeaturedProject";
import Project from "@/components/customComponents/Project";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects by Moses Solomon</title>
        <meta name="description" content="projects built by Moses Solomon" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            Text="dream and achieve"
            classname="!mb-16 text-7xl lg:text-6xl md:!text-5xl sm:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                img={project1}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="#"
                img={project2}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="#"
                img={project3}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="#"
                img={project2}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="#"
                img={project4}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="#"
                img={project5}
                github="#"
                type="featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
