import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const route = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Fullstack Web and Mobile App developer - Moses Solomon"
        />
        <meta
          name="keywords"
          content="Moses, Solomon, Moses Solomon, developer, portfolio, web developer, fullstack, fullstack developer"
        />
        <meta name="author" content="Moses Solomon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Moses Solomon's Portfolio" />
        <meta
          property="og:description"
          content="Fullstack Web and Mobile App developer - Moses Solomon"
        />
        <meta property="og:url" content="https://mosessolomon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mosessolomon.vercel.app/opengraphcard.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moses Solomon's Portfolio" />
        <meta
          name="twitter:description"
          content="Fullstack Web and Mobile App developer - Moses Solomon"
        />
        <meta
          name="twitter:image"
          content="https://mosessolomon.vercel.app/twittercard.png"
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light  dark:bg-[#15202b]
          w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={route.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
