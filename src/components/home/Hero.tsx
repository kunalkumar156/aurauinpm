"use client";

import React from "react";
import { MacDock } from "@/components/ui/examples/dock";
import RetroGrid from "@/components/ui/examples/retro-grid";
import AnimateNumber from "../ui/examples/number";
import HoverBox from "../ui/examples/hover-box";
import ExampleTab from "../ui/examples/tab";
import { ShinyTextExample } from "../ui/examples/shiny-text";
import { motion } from "framer-motion";
import ToggleExample from "../ui/examples/toggle";
import LoadingExample from "../ui/examples/loading";
import Link from "next/link";
import ReviewCard from "../ui/examples/review-card";
import { OrbitingCirclesDemo } from "../ui/examples/circle-example";

const CounterExample = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-gray-100 h-[120px] w-[115px] dark:bg-customDark rounded-xl p-4 cursor-pointer"
    >
      <AnimateNumber number={1000} />
      <h3 className="text-sm mt-5 text-gray-800 dark:text-white leading-none">
        free <br />
        resources
      </h3>
    </motion.div>
  );
};

const GridExample = () => {
  return (
    <div className="relative flex h-full w-full max-w-[250px] items-center justify-center overflow-hidden rounded-xl border border-neutral-200 dark:border-darkBorder p-20">
      <RetroGrid />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 w-full h-[1670px] sm:h-[1200px] lg:h-[950px]">
        <RetroGrid className="w-full h-full" />
      </div>
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
        )}
      /> */}
      {/* <AnimatedGridPattern
        numSquares={80}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      /> */}
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-10">
        <div className="relative  mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[100px]">
          <div className="max-w-3xl mx-auto text-center">
            <ShinyTextExample />
            <h1 className="mt-5 text-[34px] font-bold leading-tight dark:text-gray-100  text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Copy. Paste. Ship.
            </h1>
            <p className="max-w-2xl mx-auto px-4 mt-6 text-base  dark:text-gray-300  leading-7 text-gray-600 font-inter">
              Stop Coding from Scratch: A UI Library for Every Skill Level.
              Quickly Copy and paste components and ship your website 🏎️
              fasterrrrrr than ever!
            </p>

            <div className="flex items-center justify-center space-x-5 mt-5">
              {/* className="w-7 h-7 text-gray-900 dark:text-gray-300"  */}
              <img
                src="/components/next.svg"
                alt="nextjs"
                className="w-5 h-5 text-gray-900 dark:text-gray-300"
              />
              <img
                src="/components/react.svg"
                alt="react js"
                className="w-5 h-5 text-gray-900 dark:text-gray-300"
              />
              <img
                src="/components/tailwind.svg"
                alt="tailwind"
                className="w-5 h-5 text-gray-900 dark:text-gray-300"
              />
              <img
                src="/components/css-icon.svg"
                alt="css "
                className="w-5 h-5 text-gray-900 dark:text-gray-300"
              />
              <img
                src="/components/framer.svg"
                alt="framer"
                className="w-5 h-5 text-gray-900 dark:text-gray-300"
              />
            </div>

            <div className="relative inline-flex mt-10 group">
              <Link
                href="/allcomponents"
                title=""
                className="relative inline-flex items-center justify-center px-6 py-3 text-md font-bold text-white transition-all duration-200 bg-[#282829] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-[#282829]"
                role="button"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center space-y-6 sm:space-y-6 sm:space-x-6">
          <div className=" flex items-center flex-col md:mt-6 w-[300px] md:-mr-5  ">
            <ReviewCard />
            <MacDock />
          </div>
          <div>
            {/* <LikeCard /> */}
            {/* <WalletModal /> */}
            <OrbitingCirclesDemo />
          </div>
          <div className="flex flex-col space-y-4">
            <ExampleTab />
            <HoverBox />
          </div>
          <div className="flex md:flex-col justify-center items-center gap-4 md:gap-0 space-y-4 ">
            <ToggleExample />
            <CounterExample />
            <LoadingExample />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
