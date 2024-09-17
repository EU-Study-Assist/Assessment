import React from "react";

const RegInput = () => {
  return (
    <div className="bg-white flex items-center justify-between rounded-full px-2 ps-4 py-2 lg:py-1 mt-5 lg:mt-8 lg:w-[27vw]">
      <input
        className="border-none outline-none text-xs lg:text-sm flex-1 lg:px-2 text-black"
        placeholder="Enter your Email"
        type="email"
        alt="Email Input"
      />
      <button className="bg-primary px-3 rounded-full py-2 text-xs lg:text-sm">
        Register for Free
      </button>
    </div>
  );
};

export default RegInput;
