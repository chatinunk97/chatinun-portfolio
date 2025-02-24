import React from "react";

const TimeLineElement = ({
  elements,
}: {
  elements: {
    name: string;
    period: string;
    position: string;
    icon: string;
    details: string[];
  }[];
}) => {
  return (
    <>
      {elements.map((e) => {
        return (
          <li className="relative p-2 pl-20" key={e.name}>
            <img
              className="absolute -left-10 w-20 rounded-full border border-white-100"
              src={e.icon}
            />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-sm text-gray-400">{e.period}</p>
                <p className="text-lg font-bold">{e.name}</p>
              </div>
              <p className="text-gray-400">{e.position}</p>
              <ul className=" mt-2">
                {e.details.map((sentence)=>  <li>•&nbsp;&nbsp;{sentence}</li>)}
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TimeLineElement;
