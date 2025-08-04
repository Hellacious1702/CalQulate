import React from "react";
import Section1 from "../Components/Section1";
import WeightLossData from "../Data/WeightLoss";
import { Link } from "react-router";

const WeightLoss = () => {
  return (
    <>
      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl">Healthy Weight Loss, Made Simple.</h1>
          <p className="w-5/7 text-neutral-500 italic">
            Welcome to CalQulate’s guide for real, sustainable weight loss. This
            isn’t about quick fixes or drastic diets—it’s about understanding
            your body, setting achievable goals, and making gradual changes that
            last. With science-backed strategies and easy-to-use tools, you’ll
            discover how to safely reduce body fat, boost your energy, and feel
            your best. CalQulate supports you every step of the way with clear
            guidance, personalized recommendations, and a community that
            encourages lifelong wellness.
          </p>
        </div>
      </section>

      {WeightLossData.map((sections) => (
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
            Begin Your Healthier Journey with{" "}
            <span className="text-primary">CalQulate.</span>
          </h1>
          <div className="flex gap-x-10 items-center justify-evenly">
            <p className=" text-neutral-700 text-l w-6/8">
              Ready to take charge of your weight loss journey? CalQulate
              provides the knowledge, structure, and encouragement you need to
              create lasting change. Start today—input your details, set your
              goals, and let CalQulate guide you toward a healthier, more
              vibrant you!
            </p>
            <Link className="cursor-pointer" to={"/"}>
              <button className="rounded-full bg-primary font-bold text-white px-10 py-5">
                Calculate My Deficit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeightLoss;
