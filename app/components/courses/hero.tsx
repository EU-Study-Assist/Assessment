import RegInput from "@/app/ui/reg-input";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center text-center lg:my-10 my-4 w-full lg:h-[80vh]">
      <div className="rounded-xl border bg-primary text-white flex-1 h-80 lg:h-full flex flex-col text-center justify-center items-center">
        <p className="text-sm mb-1 lg:mb-3">Free Courses</p>
        <h2 className="text-3xl lg:text-4xl px-4 lg:w-[30vw] font-semibold">
          Introduction to R, SQL and Python
        </h2>
        <p className="text-xs mt-3">
          Level up your data skills with EU study assist
        </p>
        <RegInput />
      </div>
    </div>
  );
};

export default Hero;
