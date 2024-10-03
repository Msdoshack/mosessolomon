import Layout from "./Layout";
import Link from "next/link";
import { LinkedInIcon } from "./Icons";
import Image from "next/image";
import arrowdown from "../../public/arrow-down-2.webp";
const Footer = () => {
  return (
    <footer className="mt-32 w-full border-t border-dark/20 dark:border-light/10 font-medium !text-base dark:text-lightblue sm:text-sm">
      <Layout className="!p-10 sm:!pb-2 !text-base flex flex-col items-center md:text-xs ">
        <div className="flex w-full flex-row sm:flex-col justify-between  gap-20 sm:gap-10">
          <div className="flex w-1/2  gap-4 sm:w-full self-start flex-col">
            <div className="flex items-center gap-4">
              <Image
                src={arrowdown}
                alt=""
                className="w-7 sm:w-6 bg-white p-1"
              />
              <p>Quick links</p>
            </div>
            <div className="flex text-sm justify-between  gap-3 mt-3 text-gray-600 dark:text-gray-300">
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

          <div className=" sm:w-full">
            <p className="">Contact me</p>
            <div className="flex flex-col gap-2 mt-3 text-gray-600 dark:text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <Image
                  alt="email"
                  src={"/email.png"}
                  width={5}
                  height={5}
                  className={"w-4 h-4 bg-black"}
                />
                :
                <span target="_blank" href={"tel:+237063433942"}>
                  msdosdarapper@gmail.com, <br />
                  mosessolomonms@outlook.com
                </span>
              </p>

              <p className="flex items-center gap-1">
                <Image
                  alt="twitter"
                  src={"/X_logo.png"}
                  width={5}
                  height={5}
                  className={"w-4 h-4 bg-black"}
                />
                :
                <Link target="_blank" href={"https://x.com/Msdos_rapper"}>
                  x.com/Msdos_rapper
                </Link>
              </p>

              <p className="flex items-center gap-1">
                <LinkedInIcon className="!w-4 !h-4" />:
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/solomon-moses-4981b4105"}
                >
                  linkedin.com/in...
                </Link>
              </p>

              <p className="flex items-center gap-1">
                <Image
                  alt="facebook logo"
                  src={"/Facebook_Logo.png"}
                  className="w-4 h-4"
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

        <div className="w-full text-center pt-10 text-sm text-gray-500 dark:text-gray-300">
          <span className="dark:text-light/70">All right reserved </span>
          &copy;
          {new Date().getFullYear()}
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
