import Head from "next/head";
import Image from "next/image";
import { Inter, Space_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

import profilePic from "../../public/images/profile/home.png";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moses Solomon</title>
        <meta
          name="Moses Solomon"
          content="info about Moses Solomon, a full stack web and mobile app developer"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className="flex mt-16 md:mt-10 sm:mt-6 text-dark min-h-screen">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-0 sm:mt-0 items-center justify-center">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="moses solomon"
                className="w-full h-auto  lg:inline-block lg:w-full "
                priority
                sizes="(max-width:768px ) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg-text-center ">
              <AnimatedText
                classname="!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl text-left sm:my-4"
                Text='"Imagine. Code. Innovate. Excel."'
              />

              <p className="my-4 text-base font-medium dark:text-light md:text-lg sm:text-sm capitalize text-start w-full">
                Hi there! I'm
                <span className="font-bold"> MOSES SOLOMON </span>
                Welcome to my
                <span className="font-extrabold uppercase"> portfolio. </span>
              </p>
              <p className="my-2 text-base font-medium dark:text-light  sm:text-sm">
                This portfolio is a showcase of my passion, creativity, and
                dedication. Each project represents an opportunity where I have
                poured my heart and soul into crafting beautiful solutions that
                align with the goals and aspirations of my clients. I invite you
                to explore my work and witness the seamless fusion of
                functionality, aesthetics, and innovation.
              </p>
              <div className="self-start mt-5 lg:self-center">
                <Link
                  href="https://wa.me/+2347063433942"
                  target="_blank"
                  className="flex items-center gap-3  bg-dark dark:bg-[#8899ac] dark:text-dark dark:hover:bg-lightblue text-light p-2.5 px-5 sm:px-3 rounded-lg text-lg sm:text-sm hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark  dark:hover:text-light border-2 ml-4 md:text-base"
                >
                  Chat on whatsapp
                  <Image
                    alt="whatsapp icon"
                    className="w-4 h-4"
                    src={"/whatsapp-icon.png"}
                    width={10}
                    height={10}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}

// href="mailto:msdosdarapper@gmail.com"
