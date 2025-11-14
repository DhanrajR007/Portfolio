import React from "react";
import Projects from "../components/Projects";
import StickyCards from "../components/StickyCards";

const ProjectSection = () => {
  return (
    <div id="projects" className="px-10 py-2 pb-10  lg:py-10 rounded-b-[50px] bg-white text-black ">
      <div className="lg:py-1 overflow-hidden">
        <div className="text-center py-4 ">
          <img className="h-20 lg:h-44 object-cover w-full" src="./jjjkj.png" alt="" />
        </div>
      </div>
      <StickyCards/>
    </div>
  );
};

export default ProjectSection;
