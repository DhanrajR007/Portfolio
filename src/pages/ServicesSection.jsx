import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-black text-white py-10 px-10  h-screen">
      <div className="text-(--color-primary) font-medium font-[Smooch Sans]">
        // Services
      </div>

      <div className="flex items-center pt-10 justify-center gap-10">
        <div className="w-[30vw]  py-8 px-5 rounded-2xl bg-zinc-900 border border-white/10">
          <h1 className="text-4xl font-medium">Built with MERN</h1>
          <div className="h-[30vw] w-full">
            <img className=" w-full object-cover" src="./f2.png" alt="" />
          </div>
          <p className="text-lg font-sm">
            Create modern web apps using MongoDB, Express, React, and Node.js.
            Fast, scalable, and designed for smooth user experiences.
          </p>
        </div>
        <div className="w-[30vw]  py-8 px-5 rounded-2xl bg-zinc-900 border border-white/10">
          <h1 className="text-4xl font-medium">Animated Enything</h1>
          <div className="h-[30vw] w-full">
            <img className=" w-full object-cover" src="./f2.png" alt="" />
          </div>
          <p className="text-lg font-sm">
            Bring ideas to life with 3D effects and interactive motion. Smooth,
            eye-catching animations that make users stay.
          </p>
        </div>
        <div className="w-[30vw]  py-8 px-5 rounded-2xl bg-zinc-900 border border-white/10">
          <h1 className="text-4xl font-medium">Powered by AI</h1>
          <div className="h-[30vw] w-full">
            <img className=" w-full object-cover" src="./f2.png" alt="" />
          </div>
          <p className="text-lg font-sm">
            Integrate smart features like chatbots, recommendations, and
            automation to make your product more powerful and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
