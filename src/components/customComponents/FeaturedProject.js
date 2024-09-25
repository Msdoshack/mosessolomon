import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid  border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
      <motion.div
        className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%]"
        whileInView={{
          backgroundColor: [
            "#121212",
            "rgba(29,161,242)",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "rgba(29,161,242)",
            "#121212",
          ],
          transition: { duration: 10, repeat: Infinity },
        }}
      />

      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <Image
            src={img}
            priority
            alt="featured project"
            sizes="(max-width:768px ) 100vw, (max-width:1200px) 50vw, 50vw"
          />
        </a>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 xs:text-base ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10">
            <GithubIcon />
          </Link>
          <div className="ml-4 bg-dark text-light rounded-lg p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
