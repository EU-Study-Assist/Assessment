import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center text-center lg:my-10 my-4 w-full md:h-[60vh] lg:h-[80vh]">
      <div className="rounded-xl border bg-primary bg-[url('/assets/images/placeholder_bg.jpg')] text-white flex-1 h-80 md:h-full flex flex-col text-center justify-center items-center">
        <p className="text-sm mb-1 lg:mb-3">Free Courses</p>
        <h2 className="text-3xl my-2 lg:text-4xl px-4 lg:fit font-semibold">
          Accomodation Payment Loan
        </h2>
        <p className="text-xs mt-3 px-3">
          Don't let visa fees hold you back from your educational dreams!
        </p>
        <button className="px-4 py-3 bg-primary text-white font-semibold rounded-full mt-7 text-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
