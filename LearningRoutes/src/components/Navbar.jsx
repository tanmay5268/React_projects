import React from "react";

const Navbar = () => {
  return (
    <div
      className=" sticky top-0 mt-5 flex h-20 justify-between items-center"
      id="flex-container"
    >
      <div className="ml-20" id="logo">
        <img src="/logo.png" alt="" srcset="" />
      </div>
      <div
        style={{ backgroundColor: "#6B63A8" }}
        className="w-1/3 h-10 items-center text-white shadow-2xl rounded-full flex justify-around"
        id="navs"
      >
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Github</div>
      </div>
      <div className=" flex items-center gap-4 mr-20" id="logs">
        <div>LogIn</div>
        <button
          style={{ backgroundColor: "#6B63A8" }}
          type="button"
          class="text-white font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
