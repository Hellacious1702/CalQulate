import React from "react";
import CalorieCard from "../CalorieCard";
import { FaBowlFood } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <div className="px-20 py-8 flex flex-col gap-y-10">
        <div>
          <div className="flex gap-x-3 items-center">
            <FaBowlFood className="text-4xl" />
            <h1 className="text-4xl">
              Calculate Your Daily Maintenance Calories With Confidence
            </h1>
          </div>
          <p className="w-5/7 mt-5 text-neutral-500 italic">Discover the precise number of calories your body needs each day to maintain your current weight, tailored specifically to your age, gender, weight, height, and lifestyle activity. With CalQulate’s easy-to-use calculator, you can take control of your nutrition goals by understanding your unique metabolic needs—empowering you to make smarter, healthier choices every day.</p>
        </div>
        <div className="flex gap-x-10">
          <div className="w-1/3 px-15 pt-15 pb-10 rounded-2xl border-2 border-primary">
            <form action="" className="flex flex-col gap-y-10">
              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Age : </h4>
                <input
                  type="number"
                  name=""
                  id=""
                  className="flex-1"
                  placeholder="Ages 15-80 Years"
                />
              </label>

              <div className="flex gap-x-5 items-center">
                <h4 className="text-2xl">Gender : </h4>
                <label htmlFor="Male" className="flex gap-x-1">
                  <input type="checkbox" name="" id="Male" />
                  Male
                </label>

                <label htmlFor="Female" className="flex gap-x-1 items-center">
                  <input type="checkbox" name="" id="Female" />
                  Female
                </label>
              </div>

              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Weight : </h4>
                <input
                  type="number"
                  name=""
                  id=""
                  className="flex-1"
                  placeholder="Kilograms(Kg)"
                />
              </label>

              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Height : </h4>
                <input
                  type="number"
                  name=""
                  id=""
                  className="flex-1"
                  placeholder="Centimeters(cm)"
                />
              </label>

              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Activity level : </h4>
                <select name="" id="" className="flex-1">
                  <option value="">Basal Metabolic Rate</option>
                  <option value="">Light Excercise</option>
                  <option value="">Medium Excercise</option>
                  <option value="">Heavy Excercise</option>
                  <option value="">Active Excercise</option>
                </select>
              </label>

              <button className="py-5 bg-primary rounded-2xl text-l font-bold text-white cursor-pointer">
                Calculate Your Maintenance Calories
              </button>
            </form>
          </div>
          <div className="flex-1 bg-neutral-200 rounded-2xl">
            <div className="h-full w-full p-15 flex flex-col  justify-between">
              <h1 className="text-4xl">Your Calculated Calories</h1>
              <p className="w-6/7">
                The results show a number of daily calorie estimates that can be
                used as a guideline for how many calories to consume each day to
                maintain, lose, or gain weight at a chosen rate.
              </p>
              <div className="flex gap-x-5">
                <CalorieCard
                  CalorieType={"Maintain weight"}
                  Calories={2400}
                  Percentage={100}
                />
                <CalorieCard
                  CalorieType={"Mild weight loss"}
                  Calories={2175}
                  Percentage={90}
                />
                <CalorieCard
                  CalorieType={"Weight loss"}
                  Calories={1925}
                  Percentage={79}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
