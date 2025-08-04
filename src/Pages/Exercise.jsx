import React from "react";
import ExerciseData from "../Data/Exercise";
import Section1 from "../Components/Section1";
import { Link } from "react-router";

const Exercise = () => {
  return (
    <>
      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl">Unlock Your Potential With Movement.</h1>
          <p className="w-5/7 text-neutral-500 italic">
            Welcome to your comprehensive guide for integrating physical
            activity into your life. Whether you’re new to exercise or looking
            to enhance your routine, this page empowers you with strategies,
            tips, and tools to make movement a joyful, sustainable part of your
            wellness journey. Discover the many ways exercise supports your mind
            and body, and get ready to take confident steps toward a healthier
            you with CalQulate.
          </p>
        </div>
      </section>

      {ExerciseData.map((sections) => (
        <Section1
          Title={sections.Title}
          TitleSpan={sections.TitleSpan}
          Description={sections.Description}
          Image={sections.SectionImage}
          sectionDesignType={sections.sectionDesignType}
        />
      ))}

      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-5xl w-5/6">
            Start Moving Toward a 
            <span className="text-primary"> Healthier You.</span>
          </h1>
          <div className="flex gap-x-10 items-center justify-evenly">
            <p className=" text-neutral-700 text-l w-6/8">
              It’s time to put your plans into action. Use CalQulate to set your
              fitness goals, design a routine you love, and track your ongoing
              progress. Every workout brings you closer to your best self—begin
              your movement journey today and experience the benefits for life!
            </p>
            <Link className="cursor-pointer" to={"/"}>
              <button className="rounded-full bg-primary font-bold text-white px-10 py-5">
                Calculate My Calories
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exercise;
