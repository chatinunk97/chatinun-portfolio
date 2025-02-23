import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import japan from "@/public/japan.png";
import thai from "@/public/thailand.png";
import eng from "@/public/united-kingdom.png";
import ButtonMagic from "./ButtonMagic";
import Link from "next/link";
import TechStackHero from "./TechStackHero";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
const LanguagePopup = () => {
  return (
    <TooltipProvider key="languagePopup" delayDuration={10}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="font-bold cursor-pointer underline">Trilingual</span>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex gap-4 p-2 px-4 bg-white-200 rounded-lg">
            <img src="japan.png" alt="japan" width={30} height={30} />
            <img src="united-kingdom.png" alt="eng" width={30} height={30} />
            <img src="thailand.png" alt="thai" width={30} height={30} />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
const Hero = () => {
  return (
    <div className="pb-20 md:p-16 ">
      <div>
        <Spotlight
          className="top-40 -left-10 md:-lef5-32 md:-top-20 h-screen"
          fill="black"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[100vw] md:w-[50vw]"
          fill="#cf4b44"
        />
        <Spotlight
          className="top-38 left-0 md:left-80  h-[80vh] w-[100vw] md:w-[50vw]"
          fill="#cf4b44"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60w] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Exploring, building, and sharing my journey through tech
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Fueled by Innovation, Driven to learn, Built to Create"
          />
          <div className="w-full h-full text-center md:tracking-wide text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Chatinun, a <LanguagePopup /> Developer based in Japan
          </div>
          <Link
            className=" w-60 md:mt-10 py-5 flex items-center justify-center"
            href={"/#projects"}
          >
            <ButtonMagic
              title={"Show my Work"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
          <TechStackHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;
