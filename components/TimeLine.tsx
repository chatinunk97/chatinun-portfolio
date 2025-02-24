"use client";
import React, { useState } from "react";
import TimeLineButton from "./TimeLineButton";
import TimeLineElement from "./TimeLineElement";
import { educationData, workData } from "@/utils/data";
const TimeLine = () => {
  const [choice, setChoice] = useState("work");
  return (
    <div className="flex flex-col justify-center gap-5" id="experience">
      <TimeLineButton setChoice={setChoice} choice={choice} />
      <div className="z-10 p-4 border border-white-100 rounded-lg">
        <ul className="ml-10 border-l-2 border-white-100 flex flex-col gap-5">
          {"education" === choice.toLocaleLowerCase() ? (
            <TimeLineElement elements={educationData} />
          ) : (
            <TimeLineElement elements={workData} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
