import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import mysnippet from "../../public/images/projects/mysnippet.jpg";
import comical from "../../public/images/projects/portfoliocomical.jpg";
import fortuna from "../../public/images/projects/fortunacard.jpg";
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
            Text="dream to achieve"
            classname="!mb-16 text-7xl lg:text-6xl md:!text-5xl sm:!text-4xl text-white"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Video sharing platform"
                summary="A feature-rich comedic video-sharing platform, built with React, Styled Components, Redux Toolkit, Nest.js, MongoDB, and Firebase. The app is mobile-responsive with both light and dark mode support."
                link="https://komicals.onrender.com"
                img={comical}
                github="#"
                type="featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="A football prediction website"
                link="https://fortunatips.vercel.app"
                img={fortuna}
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
                title="MySnippets"
                summary="A minimalistic web application for safely storing your reusable snippets. It was built using standard Go libraries, plain JavaScript, HTML, and CSS, with PostgreSQL for the database."
                link="https://mysnippets.onrender.com"
                img={mysnippet}
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
