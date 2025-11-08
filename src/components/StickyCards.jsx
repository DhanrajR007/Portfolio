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
            const afterOpacity = progress;
            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afterOpacity,
            });
          },
        });
      }
    });
  }, { scope: container });

  return (
    <div
      className="sticky-cards relative w-full h-full "
      ref={container}
    >
      {stickyCardsData.map((cardData, index) => (
        <div
          key={index}
          className="rounded-4xl sticky-card relative w-full h-[90svh] bg-[#edf1e8] text-[#1a1a1a] p-6 flex gap-12 will-change-transform 
          bg-cover
          max-[1000px]:flex-col max-[1000px]:gap-0"
            style={{ backgroundImage: `url(${cardData.image})` }}
        >
         
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
