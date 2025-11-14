import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen w-full bg-white text-black rounded-t-[50px] px-10 pt-4 lg:py-8 max-[768px]:px-5">
      {/* Heading */}
      <div className="text-(--color-primary) font-medium font-[Smooch Sans] text-2xl max-[768px]:text-xl lg:mb-6">
        // About
      </div>

      {/* Top Text Section */}
      <div className="flex justify-between w-full flex-wrap lg:py-5 gap-8">
        <div className="w-[30%] max-[1024px]:w-[45%] max-[768px]:w-full pt-10">
          <h1 className="text-lg leading-relaxed max-[768px]:text-base">
            Design is not just a job for me, it's a passion that drives me.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            officiis? Nostrum animi repudiandae nemo aliquam?
          </h1>
        </div>

        <div className="w-[50%] max-[1024px]:w-[50%] max-[768px]:w-full">
          <h1 className="text-8xl font-bold font-[Bebas Neue] leading-tight max-[1024px]:text-6xl max-[768px]:text-5xl">
            Design is my passion.
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex lg:py-10 gap-12 items-center max-[1024px]:flex-col max-[1024px]:py-10">
        {/* Image */}
        <div className="w-[55%] p-2 max-[1024px]:w-full">
          <img
            className="rounded-2xl w-full object-cover"
            src="./img.png"
            alt="About"
          />
        </div>

        {/* Stats */}
        <div className="w-[45%] max-[1024px]:w-full">
          <div className="lg:pb-10">
            <h1 className="text-6xl py-3 font-[Montserrat] font-medium max-[768px]:text-4xl">
              +200
            </h1>
            <h2 className="text-md text-zinc-500 max-[768px]:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              eum. Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </div>
          <div className="lg:pb-10">
            <h1 className="text-6xl py-3 font-[Montserrat] font-medium max-[768px]:text-4xl">
              +250
            </h1>
            <h2 className="text-md text-zinc-500 max-[768px]:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              eum. Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
