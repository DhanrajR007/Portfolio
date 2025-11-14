import React from "react";
import DarkVeil from "../components/DarkVeil";
// HeroSection.jsx
// Tailwind CSS component that mimics the layout in your image.
// Uses an image placed at '/mnt/data/d868fee2a3a31892ce0fe3b9d62a78e1.webp'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen  overflow-hidden ">
      <div className="z-1 h-screen w-full">
        <div className="absolute inset-0 z-0">
          {/* Background Video */}
          <img
            src="https://i.pinimg.com/736x/5e/ce/bd/5ecebdc36500093f732a0b9a138f2bdb.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
          {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://sheryians.com/Assets/images/cfda4326e42bda5e9a3120f31640c4f9-ezgif.com-video-speed.m4v" // ⚠️ use your own local video or a direct MP4 link
        ></video> */}
        </div>

        <div className="h-screen w-full">{/* <DarkVeil /> */}</div>
        <div className="absolute z-1 inset-0 bg-gray-950/65" />
      </div>
      {/* <div className="absolute top-0 left-0 w-[120vw] -mt-100 -ml-40 h-[130vh] z-10 rounded-full bg-[radial-gradient(circle,_#FAF062_1%,_transparent_55%)] backdrop-blur-[1px]"></div> */}

      <div className="h-screen absolute top-0 left-0 z-4 lg:pt-50 pt-60 w-full flex  items-center flex-col">
        <div>
          <h1 className="text-7xl lg:text-[9vw] leading-15 lg:leading-none text-center scale-y-200 origin-bottom font-extrabold font-[Bebas Neue] uppercase tracking-tighter text-white  ">
            Dhanraj Rathore
          </h1>
        </div>
        <div className="flex items-end justify-end w-full lg:px-10 text-right">
          <p className="lg:text-6xl font-medium text-white font-[Satisfy]">
            Web Developer
          </p>
        </div>
      </div>

      <div className="w-2/3 lg:w-full absolute lg:top-50 top-20 lg:left-0 left-15  flex justify-center items-center pt-25 lg:py-10 z-10 h-screen ">
        <img src="./jsx.png" alt="" className=" lg:scale-140 object-cover " />
      </div>
      <div className="hidden lg:block  w-full absolute text-zinc-50/90 top-50 left-0 lg:px-10  py-10 z-15 h-screen ">
        <div className="flex lg:flex-col flex-row justify-end pt-35 lg:py-20 lg:w-1/4 ">
          <div className="pt-5">
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              quisquam veritatis enim rem veniam aspernatur temporibus repellat
              quo hic omnis.
            </h1>
            <div className=" w-15 h-15 flex  gap-3 pt-4">
              <div className=" bg-[#4f46e5] text-white lg:px-3 text-xl text-center w-12 h-12 p-2 lg:py-2 rounded-full">
                <a
                  href="https://x.com/Dhanraj09182120"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
              <div className=" bg-[#4f46e5] text-white lg:px-3 text-xl text-center w-12 h-12 p-2 lg:py-2 rounded-full">
                <a
                  href="https://www.linkedin.com/in/dhanraj-rathore-89b201292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </div>
              <div className=" bg-[#4f46e5] text-white lg:px-3 text-xl text-center w-12 h-12 p-2 lg:py-2 rounded-full">
                <a
                  href="https://github.com/DhanrajR007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
