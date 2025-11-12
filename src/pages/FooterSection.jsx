import React from "react";

const FooterSection = () => {
  return (
    <div>
      <div className="relative rounded-t-[50px] border border-white/20 w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="hbb.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-24 w-full px-6 py-10 max-[768px]:gap-16">
          {/* Top Section */}
          <div className="flex items-center justify-center gap-6 w-full flex-wrap">
            <div className="h-72 w-72 max-[1024px]:h-56 max-[1024px]:w-56 max-[768px]:h-40 max-[768px]:w-40">
              <img
                className="h-full w-full object-cover"
                src="./f2.png"
                alt=""
              />
            </div>

            <div className="text-center">
              <h1 className="text-[8vw] max-[768px]:text-[14vw] leading-none font-[Satisfy] font-thin text-white">
                Let's Work
              </h1>
              <h1 className="text-[10vw] max-[768px]:text-[16vw] leading-none font-[Bebas Neue] font-semibold tracking-tighter uppercase text-white">
                Together
              </h1>
            </div>

            <div className="h-72 w-72 max-[1024px]:h-56 max-[1024px]:w-56 max-[768px]:h-40 max-[768px]:w-40">
              <img
                className="h-full w-full object-cover"
                src="./f4.png"
                alt=""
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex justify-between items-center flex-wrap gap-6 text-white px-20 max-[1024px]:px-10 max-[768px]:flex-col max-[768px]:px-4">
            <div className="px-5 py-2 rounded-full border border-white/50 text-center">
              <h1 className="font-medium font-[Montserrat] text-sm">
                123-654-8988
              </h1>
            </div>
            <div className="px-5 py-2 rounded-full border border-white/50 text-center">
              <h1 className="font-medium font-[Montserrat] text-sm">
                @dhanraj.x.com
              </h1>
            </div>
            <div className="px-5 py-2 rounded-full border border-white/50 text-center">
              <h1 className="font-medium font-[Montserrat] text-sm">
                business12@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
