import React from "react";
import GainImage1 from "./Assets/WeightGain/GainImage1.png";
import GainImage2 from "./Assets/WeightGain/GainImage2.png";
import GainImage3 from "./Assets/WeightGain/GainImage3.png";
import GainImage4 from "./Assets/WeightGain/GainImage4.png";
import GainImage5 from "./Assets/WeightGain/GainImage5.png";
import GainImage6 from "./Assets/WeightGain/GainImage6.png";
import GainImage7 from "./Assets/WeightGain/GainImage7.png";
import GainImage8 from "./Assets/WeightGain/GainImage8.png";
import GainImage9 from "./Assets/WeightGain/GainImage9.png";
import Section1 from "../Components/Section1";

import { Link } from "react-router";

const WeightGain = () => {
  return (
    <>
      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl">Gain Weight the Healthy Way.</h1>
          <p className="w-5/7 text-neutral-500 italic">
            Welcome to your personalized guide for healthy, sustainable weight
            gain. Whether you struggle to put on pounds due to a fast
            metabolism, high activity levels, or other reasons, this page offers
            science-backed strategies and tools tailored to help you reach your
            goals. From understanding how many extra calories you need to smart
            eating habits and workout tips, CalQulate is here to support your
            journey every step of the way. Let’s build strength, confidence, and
            wellness together — one healthy pound at a time.
          </p>
        </div>
      </section>

      <Section1
        Title={"Why Gaining Weight Isn’t Always"}
        TitleSpan={"Easy"}
        Description={
          "Gaining weight can be surprisingly challenging, especially if you have a fast metabolism, lead an active lifestyle, or have genetic factors that make it difficult to put on pounds. Many people struggle with low appetite or find it hard to consume enough calories to create the surplus needed for healthy weight gain. Understanding these obstacles is the first step toward overcoming them. Remember—you’re not alone in this, and with the right knowledge and personalized strategies, gaining weight in a safe and effective way is absolutely achievable."
        }
        Image={GainImage1}
        sectionDesignType={"Right"}
      />

      <Section1
        Title={"How Much Weight Should You"}
        TitleSpan={"Aim For?"}
        Description={
          "Setting realistic and healthy weight gain goals is essential for long-term success and overall well-being. Experts typically recommend gaining between 0.25 to 0.5 kilograms (about 0.5 to 1 pound) per week. This gradual increase helps ensure that most of the added weight comes from muscle rather than excessive fat, promoting a balanced and sustainable transformation. Rapid weight gain can lead to unwanted fat accumulation and health issues. By focusing on steady progress and listening to your body, you’ll build strength and confidence while maintaining optimal health."
        }
        Image={GainImage2}
        sectionDesignType={"Left"}
      />

      <Section1
        Title={"Calculate Your Calorie Surplus for"}
        TitleSpan={"Healthy Weight Gain"}
        Description={
          "To gain weight effectively, you need to consume more calories than your body burns each day—a calorie surplus. This surplus provides the extra energy necessary for building muscle and adding healthy mass. Use the calculator below to estimate how many additional calories you should aim for daily based on your current age, weight, height, activity level, and weight gain goals. Remember, gradual increases in calorie intake paired with smart nutrition and strength training lead to the best results."
        }
        Image={GainImage3}
        sectionDesignType={"Right"}
      />

      <Section1
        Title={"Nutritional Strategies for"}
        TitleSpan={"Healthy Weight Gain"}
        Description={
          "Nutrition plays a crucial role in supporting your weight gain goals. Focus on consuming energy-dense, nutrient-rich foods that provide the calories and nutrients your body needs to build muscle and maintain overall health. Incorporate foods like nuts and nut butters, full-fat dairy, whole grains, healthy oils (like olive or avocado oil), starchy vegetables, and lean protein sources into your meals. Eating more frequently throughout the day, including snacks and smoothies, can help increase your calorie intake without feeling overly full. Prioritizing protein supports muscle growth, while balanced meals ensure you get a variety of essential vitamins and minerals. Remember, quality matters just as much as quantity when it comes to healthy weight gain."
        }
        Image={GainImage4}
        sectionDesignType={"Left"}
      />

      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            Delicious Meal and Snack Ideas to
            <span className="text-primary"> Boost Your Calorie Intake.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            Adding calorie-dense, nutritious meals and snacks to your daily
            routine can make reaching your weight gain goals easier and more
            enjoyable. Here are some tasty options that pack a punch in both
            calories and quality nutrition—perfect for fueling muscle growth and
            supporting overall health. Remember, consistency is key, so find
            meals and snacks you love and incorporate them regularly!
            <br />
          </p>
          <ul>
            <b>Breakfast:</b>
            <li>
              Oatmeal made with whole milk, topped with nuts, seeds, and honey
            </li>
            <li>
              Smoothie with banana, peanut butter, protein powder, and full-fat
              yogurt
            </li>
          </ul>

          <ul>
            <b>Snacks:</b>
            <li>Trail mix with nuts, dried fruits, and dark chocolate</li>
            <li>Cheese and whole-grain crackers</li>
            <li>Greek yogurt with granola and fresh fruit</li>
          </ul>

          <ul>
            <b>Lunch/Dinner:</b>
            <li>
              Grilled chicken or salmon with quinoa and roasted vegetables with
              olive oil
            </li>
            <li>
              Whole grain pasta with a creamy avocado sauce and lean ground
              turkey
            </li>
            <li>
              Stir-fried tofu or beef with brown rice and mixed vegetables
            </li>
          </ul>
        </div>

        <div>
          <img className="h-[60vh]" src={GainImage5} alt="" />
        </div>
      </section>

      <Section1
        Title={"Build Muscle, Not Just "}
        TitleSpan={"Weight"}
        Description={
          "Weight gain isn’t just about eating more—it’s about gaining quality weight that supports your health and physique. Incorporating regular strength training helps you build lean muscle mass, improve your metabolism, and ensure that the additional calories you consume translate into strength and function rather than just fat. Resistance exercises such as weightlifting, bodyweight workouts, and resistance band training stimulate muscle growth and help sculpt a balanced, strong body. Combining smart nutrition with consistent training is the key to gaining weight in a healthy, sustainable way."
        }
        Image={GainImage6}
        sectionDesignType={"Left"}
      />

      <Section1
        Title={"Track Your Gains, Stay on "}
        TitleSpan={"Course"}
        Description={
          "Regularly tracking your progress is essential to staying motivated and adjusting your plan as needed. Keep an eye on your weight, take progress photos, and monitor strength improvements to get a full picture of your journey. Celebrate small milestones to maintain momentum and avoid frustration. Remember that healthy weight gain is a gradual process—consistency and patience will reward you with lasting results. Use CalQulate’s tools to log your data, review trends, and refine your calorie and workout targets. With clear feedback and ongoing support, you’ll stay committed and confident every step of the way."
        }
        Image={GainImage7}
        sectionDesignType={"Right"}
      />

      <Section1
        Title={"Avoid Common Weight Gain "}
        TitleSpan={"Pitfalls"}
        Description={
          "While the goal is to gain weight, not all weight gain methods are healthy or effective. Avoid relying too heavily on junk foods and empty calories which can lead to fat gain and health problems. Skipping protein or neglecting strength training can result in little to no muscle gain. Impatience and expecting rapid results may cause frustration and unhealthy habits. Consistency, balanced nutrition, and well-rounded exercise are key. Stay focused on quality calories, listen to your body, and adjust your approach gradually to ensure sustainable and healthy progress."
        }
        Image={GainImage8}
        sectionDesignType={"Left"}
      />

      <Section1
        Title={"How CalQulate Supports Your "}
        TitleSpan={"Weight Gain Journey"}
        Description={
          "CalQulate is designed to be more than just a calculator—it’s your personal nutrition companion. Our platform takes the guesswork out of healthy weight gain by providing you with personalized calorie and macronutrient recommendations, easy-to-use tracking tools, and supportive insights tailored to your unique needs. Whether you’re planning meals, logging progress, or staying accountable to your goals, CalQulate offers you evidence-based guidance every step of the way. Let us help you make informed decisions, overcome plateaus, and celebrate your successes on the path to gaining weight in a safe, sustainable, and empowering way."
        }
        Image={GainImage9}
        sectionDesignType={"Right"}
      />

      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-5xl w-5/6">
            Ready to Take the <span className="text-primary">Next Step?</span>{" "}
            Start Your Healthy Weight Gain Journey Now
          </h1>
          <div className="flex gap-x-10 items-center justify-evenly">
            <p className=" text-neutral-700 text-l w-6/8">
              Don’t wait to achieve the body and health you deserve. With
              CalQulate’s personalized tools, expert guidance, and easy-to-use
              trackers, you have everything you need to start gaining weight the
              right way. Whether you’re new to weight gain or looking to improve
              your progress, take control today by setting your goals,
              calculating your calorie surplus, and making informed nutritional
              choices. Your journey to a stronger, healthier you begins with one
              step — and CalQulate is here to support you every step of the way.
            </p>
            <Link className="cursor-pointer" to={"/"}>
              <button className="rounded-full bg-primary font-bold text-white px-10 py-5">
                Calculate My Surplus
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeightGain;
