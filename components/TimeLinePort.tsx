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
      <button onClick={handleToggle}>
        {" "}
        {isCardOn ? "Toggle to Timeline" : "Toggle to Projects"}{" "}
      </button>
      {isCardOn ? <CardCarousel /> : <TimelineDemo />}
    </>
  );
};

export default TimeLinePort;
