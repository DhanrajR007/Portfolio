import React from "react";

const AboutSection = () => {
  return (
    <div className="h-screen w-full bg-white text-black rounded-t-[50px]  px-10 py-3">
      <div className="text-(--color-primary) font-medium font-[Smooch Sans]">// About</div>
      <div className=" flex flex-col">
        <div className="flex justify-between w-full h-50 py-5  ">
          <div className="w-[30%] pt-20">
            <h1>
              Desing is not just a job for me , it's a passion that drives me
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              officiis? Nostrum animi repudiandae nemo aliquam?{" "}
            </h1>
          </div>
          <div className="w-[50%] ">
            <h1 className="text-8xl font-bold font-[Bebas Neue]">
              Design is my passion.
            </h1>
          </div>
        </div>
        <div className="flex py-20 gap-12 items-center">
          <div className="w-[55%] p-2">
            <img className="rounded-2xl  w-full " src="./img.png" alt="" />
          </div>
          <div className="w-[45%]">
            <div className="pb-10">
              <h1 className="text-6xl py-3 font-[Montserrat] font-medium ">+200</h1>
              <h2 className="text-md text-zinc-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, eum. Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            </div>
            <div className="pb-10">
              <h1 className="text-6xl py-3 font-[Montserrat] font-medium ">+250</h1>
              <h2 className="text-md text-zinc-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, eum. Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
