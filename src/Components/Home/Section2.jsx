import React from "react";
import Section2Image from "./Assets/Section2.webp";

const Section2 = () => {
  return (
    <>
      <section className="px-10 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            Understand the Power of Your Daily{" "}
            <span className="text-primary">Calorie Intake.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            Calorie intake is the cornerstone of managing your health and
            achieving your fitness goals. Whether you want to maintain your
            current weight, lose fat, or build muscle, knowing how many calories
            you consume each day plays a vital role.<b> Every calorie you eat
            provides energy your body uses for essential functions—like
            breathing, walking, and thinking—as well as for physical activity
            and muscle repair</b>. Consuming too few calories can slow your
            metabolism and sap your energy, while consuming too many leads to
            unwanted weight gain. With CalQulate, you gain a clear understanding
            of how your unique calorie needs align with your lifestyle and
            goals, helping you make conscious choices that fuel your body
            efficiently and sustainably.
          </p>
        </div>

        <div>
          <img className="h-[60vh]" src={Section2Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Section2;
