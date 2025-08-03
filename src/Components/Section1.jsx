import React from "react";

const Section1 = ({Title , TitleSpan , Description , Image}) => {
  return (
    <>
      <section className="px-20 pt-20 pb-10 flex gap-x-10 items-center justify-evenly">
        <div className="w-1/2 flex flex-col gap-y-10">
          <h1 className="text-5xl">
            {Title}
            <span className="text-primary"> {TitleSpan}.</span>
          </h1>
          <p className="w-5/6 text-neutral-700 text-l">
            {Description}
          </p>
        </div>

        <div>
          <img className="h-[60vh]" src={Image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Section1;
