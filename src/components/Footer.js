import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { LinkedInIcon, TwitterIcon } from "./Icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-32 w-full border-t border-dark/20 dark:border-light/10 font-medium !text-base dark:text-lightblue sm:text-sm">
      <Layout className="!p-20 md:!p-10 !pb-2 !text-base  flex flex-col md:text-xs ">
        <div className="flex flex-row sm:flex-col gap-8 justify-evenly">
          <div className="flex  self-start flex-col">
            <p>Quick links</p>
            <div className="flex text-sm flex-col sm:flex-row gap-3 mt-3 text-gray-600">
              <Link className="hover:underline underline-offset-4" href={"/"}>
                Home
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href={"/about"}
              >
                About
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href={"/project"}
              >
                Projects
              </Link>
            </div>
          </div>

          <div className="">
            <p className="">Contact me</p>
            <div className="flex flex-col gap-2 mt-3 text-gray-600 text-sm">
              <p className="flex items-center gap-2">
                Mobile:
                <Link target="_blank" href={"tel:+237063433942"}>
                  +2347063433942
                </Link>
              </p>

              <p className="flex items-center gap-1">
                twitter
                <Image
                  src={"/X_logo.png"}
                  width={5}
                  height={5}
                  className={"w-3 h-3 bg-black"}
                />
                :
                <Link target="_blank" href={"https://x.com/Msdos_rapper"}>
                  x.com/Msdos_rapper
                </Link>
              </p>

              <p className="flex items-center gap-1">
                Linkedin <LinkedInIcon className="w-3 h-3" />:
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/solomon-moses-4981b4105"}
                >
                  linkedin.com/in...
                </Link>
              </p>

              <p className="flex items-center gap-1">
                Facebook
                <Image
                  src={"/Facebook_Logo.png"}
                  className="w-3 h-3"
                  width={4}
                  height={4}
                />
                :
                <Link href={"https://www.facebook.com/msdosr"}>
                  https://www.facebook.com/msdosr
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center pt-10 text-sm text-gray-500">
          <span className="dark:text-light/70">All right reserved </span>
          &copy;
          {new Date().getFullYear()}
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
