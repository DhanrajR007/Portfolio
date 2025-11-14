import React from "react";

// NeonCrystalCards.jsx
// Single-file React component styled with Tailwind CSS.
// Place the image at: /mnt/data/9ad14b4f430ca58ada864683618894f7.jpg
// Usage: import NeonCrystalCards from './NeonCrystalCards' and render <NeonCrystalCards />

export default function NeonCrystalCards() {
  const cards = [
    {
      id: 1,
      title: "Powered by AI",
      desc: "Integrate smart features like chatbots, recommendations, and automation to make your product more powerful and efficient.",
      img:"./ai.png"
    },
    {
      id: 2,
      title: "Built with MERN",
      desc: "Create modern web apps using MongoDB, Express, React, and Node.js. Fast, scalable, and designed for smooth user experiences.",
       img:"./web.png"
    },
    {
      id: 3,
      title: "Animated Anything",
      desc: "Bring ideas to life with 3D effects and interactive motion. Smooth, eye-catching animations that make users stay.",
       img:"./3d.png"
    },
  ];

  return (
    <div
      className="min-h-screen "
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/1a/b4/fb/1ab4fbc5cc8e9e9c93bdd72076035e89.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
    <hr className="mt-4 h-px block lg:hidden bg-white" />

      <div
        className="min-h-screen w-full p-4 pb-15 lg:pb-0 sm:p-8 flex flex-col gap-10 sm:gap-20 bg-black/50"
        style={{
          backgroundImage:
            "url('https://sheryians.com/Assets/images/master-grid.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center  ">
          <img className="h-20 lg:h-32 mx-auto  object-bottom w-full lg:w-2/3" src="./hhs.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-2">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 pt-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                style={{ transform: idx === 1 ? "translateY(-13px)" : "none" }}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-full h-40 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-b from-black/8 to-transparent border border-white/5">
                    <img
                      src={card.img}
                      alt="crystal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <h3 className="text-center text-base sm:text-lg font-semibold text-purple-200 mb-2">
                  {card.title}
                </h3>
                <p className="text-center text-xs sm:text-sm text-white/70 mb-4">
                  {card.desc}
                </p>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
