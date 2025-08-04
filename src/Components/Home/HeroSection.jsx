import { useEffect, useState } from "react";
import React from "react";
import CalorieCard from "../CalorieCard";
import { FaBowlFood } from "react-icons/fa6";

const HeroSection = () => {

  const [age , setAge] = useState(20);
  const [weight , setWeight] = useState(68);
  const [height , setHeight] = useState(178);
  const [gender , setGender] = useState("Male");
  const [activityLevel , setActivityLevel] = useState(1.2);
  const [calories , setCalories] = useState();

  useEffect(()=>{
    calculateBMR(age,weight,height,activityLevel,gender)
  },[])

  let result = 0;

  function calculateBMR(age,weight,height,activityLevel,gender)
  {
    if(gender == "Male")
    {
      result = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activityLevel
    }else{
      result = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activityLevel
    }
    
    setCalories(result.toFixed(0)) 
    
  }

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
            <form action="" className="flex flex-col gap-y-10" onSubmit={(e)=>{e.preventDefault}}>
              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Age : </h4>
                <input
                  type="number"
                  name=""
                  id=""
                  className="flex-1"
                  placeholder="Ages 15-80 Years"
                  onChange={(e)=>{setAge(e.target.value)}}
                />
              </label>

              <div className="flex gap-x-5 items-center" onChange={(e) => {setGender(e.target.value)}}>
                <h4 className="text-2xl">Gender : </h4>
                <label htmlFor="Male" className="flex gap-x-1">
                  <input type="radio" name="Gender" value="Male" id="Male" />
                  Male
                </label>

                <label htmlFor="Female" className="flex gap-x-1 items-center">
                  <input type="radio" name="Gender" value="Female" id="Female" />
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
                  onChange={(e)=>{setWeight(e.target.value)}}
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
                  onChange={(e)=>{setHeight(e.target.value)}}
                />
              </label>

              <label htmlFor="" className="flex gap-x-4 items-center">
                <h4 className="text-2xl">Activity level : </h4>
                <select name="" id="" className="flex-1" onChange={(e)=>{setActivityLevel(e.target.value)}}>
                  <option value="1.2">Sedentary</option>
                  <option value="1.375">Lightly active</option>
                  <option value="1.55">Moderately active</option>
                  <option value="1.725">Very active</option>
                  <option value="1.9">Extra active</option>
                </select>
              </label>

              <button className="py-5 bg-primary rounded-2xl text-l font-bold text-white cursor-pointer" onClick={(e)=>{
                  e.preventDefault()
                  calculateBMR(age,weight,height,activityLevel,gender)}
                }>
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
                  Calories={calories}
                  Percentage={100}
                />
                <CalorieCard
                  CalorieType={"Mild Weight Loss"}
                  Calories={(calories - (0.1 * calories)).toFixed(0)}
                  Percentage={90}
                />
                <CalorieCard
                  CalorieType={"Weight loss"}
                  Calories={(calories - (0.21 * calories)).toFixed(0)}
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
