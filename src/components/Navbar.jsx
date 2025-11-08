import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" fixed z-30 w-full flex px-10 py-3  justify-between items-center">
        <div className="flex items-center ">
          <h1 className="font-[Satisfy] text-white font-semibold">DHANRAJ.</h1>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className=" lg:block hidden cursor-pointer bg-black/10 backdrop-blur-sm hover:bg-[#4f46e5] transition-all   w-auto h-8 py-1 px-5 rounded-3xl text-center  border border-[#4f46e5]">
            <h1 className="text-sm text-white font-medium font-[Montserrat]">Who I'm?</h1>
          </div>
          <div className=" lg:block hidden sm:hidden cursor-pointer bg-black/10 backdrop-blur-sm  hover:bg-[#4f46e5] transition-all  w-auto h-8 py-1 px-5 rounded-3xl text-center  border border-[#4f46e5]">
            <h1 className="text-sm text-white font-medium font-[Montserrat]">
              Proof of Work
            </h1>
          </div>
          <div className="group transition duration-1000 cursor-pointer w-auto h-10 lg:h-9 py-1.5 px-4 lg:px-3 rounded-3xl text-center gap-3 bg-[#4f46e5] text-white flex">
            <h1 className="text-xl lg:text-sm font-medium font-[Montserrat]">
              Let's Talk
            </h1>
            <div className="h-6 w-6 rounded-full flex items-center justify-center text-black bg-white">
              <i className="text-xl font-medium ri-arrow-right-up-line group-hover:hidden"></i>
              <i className="text-xl font-medium ri-arrow-right-line hidden group-hover:inline"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
