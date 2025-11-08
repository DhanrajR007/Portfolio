import React from "react";

const FooterSection = () => {
  return (
    <div>
      <div className="relative rounded-t-[50px] border border-white/20 w-full h-screen flex items-center justify-center overflow-hidden ">
        {/* Background Image */}
        <img
          src="hbb.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Black to Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b backdrop-blur-[2px] from-black via-black/20 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col gap-36  justify-between ">
         <div className="flex  flex-1 items-center gap-4 ">
           <div className="h-96 w-96 ">
            {" "}
            <img className="h-full w-full object-cover" src="./f2.png" alt="" />
          </div>
          <div>
            <h1 className="text-[8vw] -mb-16 leading-none font-[Satisfy] font-thin text-white text-center ">
              Let's Work
            </h1>
            <h1 className="text-[10vw] leading-none font-[Bebas Neue] font-semibold tracking-tighter uppercase text-white text-center ">
              Together
            </h1>
          </div>
          <div className="h-96 w-96 ">
            {" "}
            <img className="h-full  w-full object-cover" src="./f4.png" alt="" />
          </div>
         </div>
         <div className="flex justify-between text-white items-center -mb-28 px-36 flex-2">
          <div className="px-5 py-2 rounded-full leading-none border border-white "><h1 className="font-medium font-[Montserrat] text-sm">123-654-8988</h1></div>
          <div className="px-5 py-2 rounded-full leading-none border border-white "><h1 className="font-medium font-[Montserrat] text-sm">@dhanraj.x.com</h1></div>
          <div className="px-5 py-2 rounded-full leading-none border border-white "><h1 className="font-medium font-[Montserrat] text-sm">business12@gmail.com</h1></div>
         </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default FooterSection;
