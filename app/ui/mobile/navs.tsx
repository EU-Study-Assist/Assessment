import Image from "next/image";
import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavActions from "../navactions";

const MNavs = ({
  show,
  toggleNav,
}: {
  show: boolean;
  toggleNav: () => void;
}) => {
  return (
    <div className="lg:hidden">
      {show && (
        <div className="bg-white rounded-b shadow font-semibold flex flex-col w-72 h-screen duration-300 absolute top-0 left-0 px-3 py-2">
          <div className="flex justify-between items-center text-xs">
            <Image src={logo} alt="EU Logo" />
            <p
              onClick={toggleNav}
              className="w-8 h-8 border rounded-full flex justify-center items-center text-red-600"
            >
              X
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <ul className="flex flex-col list-none py-2 gap-1 font-semibold">
              <li className="py-2">Home</li>
              <li className="py-2">About Us</li>
              <li className="py-2">Loan Calculator</li>
              <li className="py-2">Resourses</li>
            </ul>
            <NavActions />
          </div>
        </div>
      )}
      <button onClick={toggleNav} className="menu">
        Menu
      </button>
    </div>
  );
};

export default MNavs;
