import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" fixed z-30 w-full flex lg:px-10 px-4 py-3  justify-between items-center">
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
          <div className="group transition duration-1000 cursor-pointer w-34 px-1 lg:px-3 h-9 justify-between rounded-3xl text-center gap-3 bg-[#4f46e5] text-white flex items-center">
          <div className="px-2 lg:px-0">
              <h1 className="text-sm font-[Montserrat]">
              Let's Talk
            </h1>
          </div>
            <div className="h-8 w-8 lg:h-7 lg:w-7 rounded-full flex items-center justify-center text-black bg-white ">
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
