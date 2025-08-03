import React from "react";
import Section3Image from "./Assets/Section3.png";

const Section3 = () => {
  return (
    <>
      <section className="px-10 py-10 flex gap-x-10 items-center justify-evenly">
        <div>
          <img className='h-[60vh]' src={Section3Image} alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            Why Tracking Your <span className="text-primary">Calories</span>{" "}
            Makes All the Difference.{" "}
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            Tracking your calories is one of the most effective strategies for
            reaching your health and fitness aspirations. By accurately
            monitoring what you eat and drink each day, you gain invaluable
            insight into your habits, allowing you to identify hidden calorie
            sources and patterns that may be hindering your progress.<b> Calorie
            tracking empowers you to make conscious, data-driven
            decisions—transforming vague guesses into clear, actionable
            knowledge</b>. Whether your goal is to lose weight, gain muscle, or
            simply maintain your health, keeping track of your intake helps you
            stay accountable, avoid unintentional overeating, and celebrate your
            progress with confidence. With CalQulate, calorie tracking becomes
            effortless and encouraging, giving you the tools to take charge of
            your nutrition journey and see real, sustainable results.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section3;
