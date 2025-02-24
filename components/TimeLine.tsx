"use client";
import React, { useState } from "react";
import TimeLineButton from "./TimeLineButton";
import TimeLineElement from "./TimeLineElement";

const work = [
  "Akagane",
  "Koerber Pharma",
  "Axross Road Japan",
  " FPT Japan holdings",
];
const education = ["Codecamp", "Waseda", "Thammasat"];
const TimeLine = () => {
  const [choice, setChoice] = useState("work");
  return (
    <div className="flex flex-col justify-center gap-5">
      <TimeLineButton setChoice={setChoice} choice={choice} />
      <div id="work" className="p-4 border border-white-100 rounded-lg">
        <ul className="ml-10 border-l-2 border-white-100">
          {"education" === choice.toLocaleLowerCase() ? (
            <TimeLineElement elements={education} />
          ) : (
            <TimeLineElement elements={work} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
