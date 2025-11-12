import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const stickyCardsData = [
    {
      index: 1,
      title: "Web Development",
      image: "./hbb.jpg",
      description:
        "Creating responsive and modern web applications using the latest technologies and frameworks.",
    },
    {
      index: 2,
      title: "UI/UX Design",
      image: "./hb.jpg",
      description:
        "Crafting beautiful and intuitive user interfaces with focus on user experience and accessibility.",
    },
    {
      index: 3,
      title: "Mobile Development",
      image: "./hb2.jpg",
      description:
        "Building cross-platform mobile applications that deliver exceptional performance and user experience.",
    },
    {
      index: 4,
      title: "Cloud Solutions",
      image: "./img.png",
      description:
        "Implementing scalable cloud infrastructure and solutions for modern applications.",
    },
  ];

  const container = useRef(null);

  useGSAP(() => {
    const stickyCards = document.querySelectorAll(".sticky-card");
    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            gsap.set(card, { scale, rotation });
          },
        });
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="sticky-cards relative w-full h-full">
      {stickyCardsData.map((cardData, index) => (
        <div
          key={index}
          className="sticky-card relative w-full h-[60vh] bg-[#edf1e8] text-[#1a1a1a] flex items-center justify-between 
                     p-10 rounded-3xl shadow-md bg-cover bg-center will-change-transform
                     max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:text-center max-[1000px]:p-6"
          style={{ backgroundImage: `url(${cardData.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

          <div className="relative z-10 w-1/2 max-[1000px]:w-full">
            <h2 className="text-4xl font-bold mb-3 max-[1000px]:text-2xl">
              {cardData.title}
            </h2>
            <p className="text-base leading-relaxed max-[1000px]:text-sm">
              {cardData.description}
            </p>
          </div>

          <div className="relative z-10 w-1/2 max-[1000px]:w-full h-[40vh] max-[1000px]:h-[30vh] rounded-2xl overflow-hidden">
            <img
              src={cardData.image}
              alt={cardData.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
