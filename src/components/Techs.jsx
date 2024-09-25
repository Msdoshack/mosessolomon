import javascript from "../../public/images/tech/javasript-logo.png";
import typescript from "../../public/images/tech/typescript-logo.png";
import go from "../../public/images/tech/Go-Logo.png";
import python from "../../public/images/tech/python-logo.webp";
import nodejs from "../../public/images/tech/nodejs-logo.png";
import django from "../../public/images/tech/django-logo.png";
import express from "../../public/images/tech/express-logo.png";
import mongodb from "../../public/images/tech/mongodb.png";
import mysql from "../../public/images/tech/mysql-logo.svg";
import html from "../../public/images/tech/html-logo.png";
import css from "../../public/images/tech/css-logo.png";
import reactnative from "../../public/images/tech/react-native.png";
import react from "../../public/images/tech/react-logo.png";
import nextjs from "../../public/images/tech/nextjs.png";
import bootstrap from "../../public/images/tech/bootsrap.png";
import tailwind from "../../public/images/tech/tailwind-logo.png";
import redux from "../../public/images/tech/redux.png";
import firebase from "../../public/images/tech/firebase.png";
import docker from "../../public/images/tech/docker-logo.png";
import git from "../../public/images/tech/git-logo.jpg";
import Image from "next/image";

const Techs = () => {
  const images = [
    javascript,
    typescript,
    go,
    python,
    nodejs,
    django,
    express,
    mongodb,
    mysql,
    html,
    css,
    reactnative,
    react,
    nextjs,
    bootstrap,
    tailwind,
    redux,
    firebase,
    docker,
    git,
  ];
  return (
    <div className="w-full overflow-hidden">
      <h4 className="text-gray-600 dark:text-gray-300 mt-16 mb-4 px-4">
        Technologies i use
      </h4>
      <div className="flex gap-4 flex-wrap">
        {images.map((img, i) => (
          <Image
            src={img}
            className="w-20 sm:w-16  object-cover rounded-md"
            alt=""
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Techs;
