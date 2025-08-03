import React from "react";
import Section5Image from "./Assets/Section5.webp";

const Section5 = () => {
  return (
    <>
      <section className="px-10 py-10 flex gap-x-10 items-center justify-evenly">
        <div >
          <img className='h-[60vh]' src={Section5Image} alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl w-7/8">
            How to Eat Mindfully and Make Every
            <span className="text-primary"> Calorie Count.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            Eating is not just about satisfying hunger—it’s an opportunity to
            nourish your body with foods that support your well-being and goals.
            Adopting a mindful approach means paying attention to what you eat,
            why you choose certain foods, and how different meals make you feel.
            Instead of seeing calories as just numbers, consider the quality and
            nutritional value each calorie brings: focus on whole foods rich in
            vitamins, minerals, protein, fiber, and healthy fats. Prioritize
            vegetables, lean proteins, fruits, whole grains, and healthy oils,
            while enjoying treats in moderation. Listening to your hunger and
            fullness cues helps prevent overeating and fosters a healthy
            relationship with food.<b> By thinking intentionally about your choices
            and savoring your meals, you’ll learn to balance enjoyment with
            accountability—ensuring each calorie you consume benefits your
            energy, health, and progress. With CalQulate, you don’t just count
            calories—you make every calorie work for you.</b>
          </p>
        </div>
      </section>
    </>
  );
};

export default Section5;
