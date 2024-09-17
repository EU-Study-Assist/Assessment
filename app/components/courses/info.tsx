import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="py-5 flex mt-3 lg:mt-10 lg:items-center">
      <div className="flex flex-col lg:w-[50%] lg:pl-14 lg:pr-24">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Get In-Demand Tech Skills and Thrive in Europe with EU Study Assist
          <span className="text-primary"> Courses.</span>
        </h2>
        <p className="text-md pr-4 mt-3">
          Level Up Your Data Skills: FREE Intro to R, SQL & Python (Projects
          Included)
        </p>
        <ul className="text-sm list-decimal ml-4 mt-2">
          <li className="mb-1">Learn at your own pace, with free resources.</li>
          <li className="mb-1">
            Master these in-demand skills and become a data whiz
          </li>
          <li className="mb-1">
            Explore the power of R in analysis, SQL for databases and Python for
            versatility.
          </li>
          <li className="mb-1">Learn how to work with MySql</li>
        </ul>
      </div>
      <div className="hidden lg:block rounded-xl h-[70vh] flex-1 ps-24">
        <div className="bg-primary h-full rounded-xl">
          {/* <Image src={} /> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
