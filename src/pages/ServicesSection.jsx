import React from "react";

const ServicesSection = () => {
  return (
    <div
      className="bg-black text-white py-16 px-10 min-h-screen"
      style={{
        backgroundImage: "url('https://sheryians.com/Assets/images/master-grid.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="text-(--color-primary) font-medium font-[Smooch_Sans] text-3xl ">
        // Services
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-5 pt-12">
        {/* Card 1 */}
        <div className="w-[30vw] max-[1024px]:w-[45vw] max-[768px]:w-full py-8 px-6 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold mb-4">Built with MERN</h1>
          <div className="h-[18vw] w-full max-[768px]:h-[50vw] mb-5">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./f2.png"
              alt="MERN Stack"
            />
          </div>
          <p className="text-base opacity-90">
            Create modern web apps using MongoDB, Express, React, and Node.js.
            Fast, scalable, and designed for smooth user experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[30vw] max-[1024px]:w-[45vw] max-[768px]:w-full py-8 px-6 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold mb-4">Animated Anything</h1>
          <div className="h-[18vw] w-full max-[768px]:h-[50vw] mb-5">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./f2.png"
              alt="Animation"
            />
          </div>
          <p className="text-base opacity-90">
            Bring ideas to life with 3D effects and interactive motion. Smooth,
            eye-catching animations that make users stay.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[30vw] max-[1024px]:w-[45vw] max-[768px]:w-full py-8 px-6 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold mb-4">Powered by AI</h1>
          <div className="h-[18vw] w-full max-[768px]:h-[50vw] mb-5">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./f2.png"
              alt="AI Features"
            />
          </div>
          <p className="text-base opacity-90">
            Integrate smart features like chatbots, recommendations, and
            automation to make your product more powerful and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
