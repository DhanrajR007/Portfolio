import { ReactLenis } from "lenis/react";
import React from "react";
import AboutSection from "./pages/AboutSection";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import ProjectSection from "./pages/ProjectSection";
import FooterSection from "./pages/FooterSection";
import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/ServicesSection";

const App = () => {
  return (
    <div className="bg-black" >
      <Navbar />
      <ReactLenis root>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ServicesSection/>
        <FooterSection />
      </ReactLenis>
    </div>
  );
};

export default App;
