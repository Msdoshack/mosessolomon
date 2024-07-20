import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "../Icons";

const Project = ({ type, img, github, link, title }) => {
  return (
    <article
      className=" w-full flex items-center flex-col justify-center rounded-3xl  border border-solid border-dark bg-light p-6
      relative xs:p-4"
    >
      <div className=" absolute top-0 -right-2.5 -z-10 w-[102%] h-[103%] rounded-[2.0rem] bg-dark dark:bg-primary rounded-br-3xl md:right-2 md:w-[101%] xs:h-[102%]xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt="project"
          priority
          sizes="(max-width:768px ) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-4 lg:text-[2xl]">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="p-2 text-lg font-semibold underline underline-offset-4 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
