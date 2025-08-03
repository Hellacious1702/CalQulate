import React from "react";
import Section6Image from "./Assets/Section6.png";

const Section6 = () => {
  return (
    <>
      <section className="px-10 pt-10 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            How CalQulate Empowers You on Your
            <span className="text-primary"> Nutrition Journey.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            <b>CalQulate isn’t just a calculator—it’s your personal guide to better
            health and well-being. From the moment you enter your details,
            CalQulate customizes every step to your unique needs, helping you
            understand your body and make informed decisions every day</b>. Our
            intuitive tools break down complex nutrition science into easy,
            actionable insights, allowing you to set goals, track your intake,
            and stay motivated. Whether you’re just starting out or refining
            your routine, CalQulate removes the guesswork and supports you with
            evidence-based recommendations, visual progress trackers, and
            positive encouragement along the way. With user-friendly design and
            empowering guidance, you gain the clarity and confidence to reach
            your nutrition and fitness goals—on your own terms. With CalQulate,
            healthy living becomes simple, sustainable, and truly yours.
          </p>
        </div>

        <div>
          <img className="h-[60vh]" src={Section6Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Section6;
