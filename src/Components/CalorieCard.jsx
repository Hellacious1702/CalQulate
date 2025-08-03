import React from "react";

const CalorieCard = ({Calories , CalorieType,Percentage}) => {
  return (
    <div className="bg-primary h-full w-1/3 p-10 flex flex-col items-center gap-y-10 rounded-2xl">
      <h4 className="text-2xl pb-5 border-b-2 border-white text-white">
        {CalorieType}
      </h4>
      <h2 className="text-6xl text-black">{Calories}</h2>
      <p className=" text-xl font-semibold text-neutral-600">{Percentage}% Calories/Day</p>
    </div>
  );
};

export default CalorieCard;
