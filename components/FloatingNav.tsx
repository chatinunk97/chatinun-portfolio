"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar";
import { BsFileCodeFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { IoSchoolSharp } from "react-icons/io5";
export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <IoSchoolSharp className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <BsFileCodeFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Contacts",
      link: "#contacts",
      icon: <TiContacts className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
