"use client";
import React from "react";

const TimeLineButton = ({
  setChoice,
  choice,
}: {
  setChoice: React.Dispatch<React.SetStateAction<string>>;
  choice: string;
}) => {
  return (
    <div className="border bg-gray-700 p-1 rounded-lg flex gap-5">
      {["Work", "Education"].map((e) => {
        return (
          <div
            className={`${
              e.toLocaleLowerCase() === choice.toLocaleLowerCase()
                ? "bg-black-100"
                : `cursor-pointer text-gray-400`
            } flex-1 flex items-center justify-center rounded-lg p-1 font-semibold text-xl font-sans`}
            key={e}
            onClick={() => {
              setChoice(e);
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default TimeLineButton;
