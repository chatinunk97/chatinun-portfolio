"use client";
import React, { useState } from "react";
import { TimelineDemo } from "./Timeline";
import { CardCarousel } from "./CardCarousel";

const TimeLinePort = () => {
  const [isCardOn, setIsCardOn] = useState(true);

  const handleToggle = () => {
    setIsCardOn((prev) => !prev);
  };
  return (
    <>
      <h1>wow</h1>
      <CardCarousel /> <TimelineDemo />
    </>
  );
};

export default TimeLinePort;
