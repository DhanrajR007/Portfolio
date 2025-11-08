import React from "react";
import Projects from "../components/Projects";
import StickyCards from "../components/StickyCards";

const ProjectSection = () => {
  return (
    <div className="px-20 py-10 rounded-b-[50px] bg-white text-black ">
      <div className="py-10">
        <div className="text-center ">
          <svg
            className="mx-auto -mb-6 w-full"
            width="2000"
            height="250"
            viewBox="0 0 956 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="paint0_linear_projects"
                x1="478"
                y1="24"
                x2="478"
                y2="118.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#011" />
                <stop offset="1" stop-color="#333" stop-opacity="0" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="transparent" />

            <text
              x="50%"
              y="62%"
              text-anchor="middle"
              dominant-baseline="middle"
              font-family="Montserrat, Arial, sans-serif"
              font-weight="700"
              font-size="120"
              letter-spacing="2"
              fill="url(#paint0_linear_projects)"
            >
              Projects
            </text>

            <text
              x="50%"
              y="62%"
              text-anchor="middle"
              dominant-baseline="middle"
              font-family="Montserrat, Arial, sans-serif"
              font-weight="700"
              font-size="120"
              letter-spacing="2"
              fill="none"
              stroke="#00000003"
              stroke-width="1"
            >
              Projects
            </text>
          </svg>
        </div>
      </div>
      <StickyCards/>
    </div>
  );
};

export default ProjectSection;
