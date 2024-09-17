import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoAddCircleSharp } from "react-icons/io5";

const Info = () => {
  return (
    <div className="py-24 md:flex mt-3 lg:mt-10">
      <div className="flex flex-col md:w-[60%] px-7 py-10 lg:pr-24 border rounded-xl mb-5 md:mb-0">
        <h2 className="text-3xl lg:text-4xl font-semibold md:w-[80%]">
          About Loan
        </h2>
        <p className="text-md pr-4 mt-3 font-semibold">
          Our Settler&apos;s Safety Net Loan acts as your safety net during this
          crucial time. Cover essential expenses like groceries, transportation
          and unexpected needs, so you can focus on adjusting and getting ready
          to dive into your studies with confidence.
        </p>
        <div className="flex flex-col gap-2 mt-8">
          <h2 className="text-xs text-gray-500">WHAT REQUIREMENT</h2>
          <div className="text-sm grid grid-cols-2 mt-2">
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={20} />
              Guarantor Information
            </li>
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={20} />
              Reference Letter
            </li>
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={20} />
              Proof of Identity
            </li>
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={20} />
              Proof of Enrollement
            </li>
          </div>
        </div>
      </div>
      <div className="rounded-xl md:ms-5 border flex-1 flex flex-col justify-between py-5 items-center">
        <div className="w-fit p-1 rounded-full text-sm border flex gap-1 items-center lg:mb-10">
          <IoAddCircleSharp size={20} className="text-primary" />
          <span>MAX AMOUNT</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-5xl font-semibold text-center">$650</h2>
          <p className=" text-center my-1">Per Loan</p>
          <p className=" text-sm my-1">No long term contract obligation</p>
          <div className="text-sm flex flex-col mt-2">
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={16} />
              Interest rate: 7.5%
            </li>
            <li className="listItem">
              <CiCircleCheck className="text-primary" size={16} />
              Reference Letter
            </li>
          </div>
          <button className="px-4 py-3 bg-primary text-white font-semibold rounded-full text-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
