import React from "react";
import DarkVeil from "../components/DarkVeil";
// HeroSection.jsx
// Tailwind CSS component that mimics the layout in your image.
// Uses an image placed at '/mnt/data/d868fee2a3a31892ce0fe3b9d62a78e1.webp'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen  overflow-hidden ">
      <div className="z-1 h-screen w-full">
        {/* Background Image
      <img
        src="bbb.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      Black to Transparent Gradient Overlay */}

        <div  style={{ width: "100%", height: "1000px", position: "relative" }}>
          <DarkVeil />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* <div className="absolute top-0 left-0 w-[120vw] -mt-100 -ml-40 h-[130vh] z-10 rounded-full bg-[radial-gradient(circle,_#FAF062_1%,_transparent_55%)] backdrop-blur-[1px]"></div> */}

      <div className="h-screen absolute top-0 left-0 z-4 pt-50 w-full flex  items-center flex-col">
        <div>
          <h1 className="text-7xl lg:text-[9vw] text-center scale-y-200 origin-bottom font-extrabold font-[Bebas Neue] uppercase tracking-tighter text-white  ">
            Dhanraj Rathore
          </h1>
        </div>
      </div>

      <div className="w-2/3 lg:w-full absolute lg:top-50 top-20 left-20 flex justify-center items-center py-10 z-10 h-screen ">
        <img src="./jsx.png" alt="" className=" lg:scale-140 object-cover " />
      </div>
      <div className="hidden lg:block w-full absolute text-zinc-50/90 top-50 left-0 px-10  py-10 z-15 h-screen ">
        <div className="flex flex-col  py-20 lg:w-1/4 ">
          <div className="pt-20">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              quisquam veritatis enim rem veniam aspernatur temporibus repellat
              quo hic omnis.
            </h1>
            <div className="flex gap-4 pt-4">
              <div className=" bg-[#4f46e5] text-white px-3 text-xl py-2 rounded-full">
                <i className="ri-twitter-x-line"></i>
              </div>
              <div className=" bg-[#4f46e5] text-white px-3 text-xl py-2 rounded-full">
                <i className="ri-linkedin-box-line"></i>
              </div>
              <div className=" bg-[#4f46e5] text-white px-3 text-xl py-2 rounded-full">
                <i className="ri-github-line"></i>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
