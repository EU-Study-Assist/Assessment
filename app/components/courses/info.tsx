import Image from "next/image";
import React from "react";
import checkicon from "@/app/assets/svg/checkicon.svg";
import infoimage from "../../assets/images/placeholder_img.jpg";

const Info = () => {
  return (
    <div className="py-12 pe-10 flex mt-3 md:mt-10 md:items-center">
      <div className="flex flex-col md:w-[50%] md:pl-14 md:pr-24">
        <h2 className="text-3xl md:text-4xl font-semibold pe-2 text-wrap">
          Get In-Demand Tech Skills and Thrive in Europe with EU Study Assist
          <span className="text-primary"> Courses.</span>
        </h2>
        <p className="text-md pr-4 mt-3">
          Level Up Your Data Skills: FREE Intro to R, SQL & Python (Projects
          Included)
        </p>
        <ul className="text-sm list-style-none mt-4">
          <li className="listItem">
            <Image src={checkicon} className="w-5" alt="Check Icon" />
            Learn at your own pace, with free resources.
          </li>
          <li className="listItem">
            <Image src={checkicon} className="w-5" alt="Check Icon" />
            Master these in-demand skills and become a data whiz
          </li>
          <li className="listItem">
            <Image src={checkicon} className="w-5" alt="Check Icon" />
            Explore the power of R in analysis, SQL for databases and Python for
            versatility.
          </li>
          <li className="listItem">
            <Image src={checkicon} className="w-5" alt="Check Icon" />
            Learn how to work with MySql
          </li>
        </ul>
      </div>
      <div className="hidden md:block rounded-xl h-[70vh] flex-1 ps-24">
        <Image
          src={infoimage}
          alt="Info Image"
          className="h-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Info;
