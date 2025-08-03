import React from "react";
import Section4Image from "./Assets/Section4.webp";

const Section4 = () => {
  return (
    <>
      <section className="px-10 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            Set Your Nutrition Goals and Take Charge of{" "}
            <span className="text-primary">Your Journey.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            Every individual has unique aspirations—whether it’s losing weight,
            building muscle, maintaining optimal health, or boosting athletic
            performance. Setting clear, realistic nutrition goals helps turn
            intentions into a concrete plan of action. With CalQulate, you can
            easily tailor your daily calorie targets and macronutrient
            breakdowns to suit your lifestyle and ambitions.<b> Goal-setting
            provides direction, motivation, and a clear way to measure progress,
            removing uncertainty from your path</b>. Let CalQulate guide you in
            creating personalized goals and tracking your achievements, ensuring
            your efforts translate into long-lasting, meaningful results.
          </p>
        </div>

        <div>
          <img className='h-[60vh]' src={Section4Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Section4;
