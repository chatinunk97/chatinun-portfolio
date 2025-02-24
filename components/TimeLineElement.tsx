import React from "react";

const TimeLineElement = ({ elements }: { elements: string[] }) => {
  return (
    <>
      {elements.map((e) => {
        return <li key={e}>{e}</li>;
      })}
    </>
  );
};

export default TimeLineElement;
