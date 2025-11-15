import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [small, setSmall] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const navRef = useRef(null);

  function sendMail() {
    const mail = `mailto:dhanrajrathore1111@gmail.com?subject=New`;
    window.location.href = mail;
  }

  // update mobile check when screen resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll logic works everywhere
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > prevScroll && current > 30) {
        setSmall(true);
      } else {
        setSmall(false);
      }

      setPrevScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  // GSAP animation (OFF on mobile always)
  useEffect(() => {
    if (!navRef.current) return;

    if (isMobile) {
      // mobile → no animation, only instant style change
      navRef.current.style.width = small ? "12rem" : "100%";
      navRef.current.style.padding = small ? "4px 12px" : "12px 40px";
      return;
    }

    // desktop/tablet animation
    if (small) {
      gsap.to(navRef.current, {
        width: "12rem",
        padding: "4px 12px",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(navRef.current, {
        width: "100%",
        padding: "12px 40px",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [small, isMobile]);

  return (
    <div>
      <div
        ref={navRef}
        className="fixed z-30 flex justify-between items-center transition-none left-0 right-0 mx-auto"
      >
        {/* Logo */}
        <h1
          className={`font-[Satisfy] text-white font-semibold transition-all 
          ${small ? "text-sm" : "text-lg"}`}
        >
          DHANRAJ.
        </h1>

        <div className="flex items-center justify-center gap-5">

          {/* hide links only when small + not mobile */}
          {!small && !isMobile && (
            <>
              <div className="lg:block hidden cursor-pointer bg-black/10 backdrop-blur-sm hover:bg-[#4f46e5] transition-all h-8 py-1 px-5 rounded-3xl border border-[#4f46e5]">
                <h1 className="text-sm text-white font-medium font-[Montserrat]">
                  <a href="#about">Who I'm?</a>
                </h1>
              </div>

              <div className="lg:block hidden sm:hidden cursor-pointer bg-black/10 backdrop-blur-sm hover:bg-[#4f46e5] transition-all h-8 py-1 px-5 rounded-3xl border border-[#4f46e5]">
                <h1 className="text-sm text-white font-medium font-[Montserrat]">
                  <a href="#projects">Proof of Work</a>
                </h1>
              </div>
            </>
          )}

          {/* Let's talk */}
          <div className="group ml-2 cursor-pointer shrink-0 w-34 px-1 lg:px-1 h-9 flex justify-between items-center gap-3 rounded-3xl bg-[#4f46e5] text-white">
            <div onClick={sendMail} className="px-2 lg:px-2">
              <h1 className="text-sm font-[Montserrat]">Let's Talk</h1>
            </div>

            <div className="h-8 w-8 lg:h-7 lg:w-7 rounded-full flex items-center justify-center text-black bg-white">
              <i className="text-2xl lg:text-lg font-medium ri-arrow-right-up-line group-hover:hidden"></i>
              <i className="text-2xl lg:text-lg font-medium ri-arrow-right-line hidden group-hover:inline"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
