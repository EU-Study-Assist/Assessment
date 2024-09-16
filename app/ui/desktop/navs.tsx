import React from "react";
import NavActions from "../navactions";

const DNavs = () => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-between">
      <ul className="flex items-center flex-1 px-5 gap-5 text-sm justify-center font-semibold">
        <li>Home</li>
        <li>About Us</li>
        <li>Loan Calculator</li>
        <li>Resourses</li>
      </ul>
      <NavActions />
    </div>
  );
};

export default DNavs;
