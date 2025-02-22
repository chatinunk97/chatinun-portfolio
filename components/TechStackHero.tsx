import React from "react";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpring, SiTypescript } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava, FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
const techStack = [
  { name: "Next.js", icon: <RiNextjsLine size={50} /> },
  { name: "React.js", icon: <FaReact size={50} /> },
  { name: "Spring", icon: <SiSpring size={50} /> },
  { name: "Typescript", icon: <SiTypescript size={50} /> },
  { name: "Java", icon: <FaJava size={50} /> },
  { name: "HTML", icon: <FaHtml5 size={50} /> },
  { name: "CSS", icon: <FaCss3Alt size={50} /> },
  { name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
  { name: "SQL", icon: <BsFiletypeSql size={50} /> },
];
const TechStackHero = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-10 justify-center items-center p-5 py-20">
      {techStack.map((e) => (
        <TooltipProvider key={e.name} delayDuration={10}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-5 border-white-100 border rounded-lg cursor-pointer">
                {e.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className=" py-2">
                <p className="bg-white-100 rounded-full text-black-100 px-4 py-2 font-semibold">
                  {e.name}
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default TechStackHero;
