import React from "react";

const TechStackCard = (techStackList: string[]) => {
  return (
    <div>
      {techStackList.map((e, i) => (
        <div key={i}>e</div>
      ))}
    </div>
  );
};

export default TechStackCard;
