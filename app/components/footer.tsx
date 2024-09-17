import Image from "next/image";
import React from "react";
import logo from "@/app/assets/svg/logo_light.svg";
import SocialLinks from "../ui/sociallinks";
import QuickLinks from "../ui/quicklinks";
import LegalLinks from "../ui/legallinks";

const Footer = () => {
  return (
    <div className="bg-black text-white px-5 lg:py-24 lg:px-28 py-12">
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-col gap-3 lg:w-[60%]">
          <Image src={logo} alt="EU Logo" />
          <div className="flex flex-col my-2">
            <h3>Address</h3>
            <p className="text-sm text-gray-500">Level 1, 12 Sample Street</p>
          </div>
          <div className="flex flex-col mb-2">
            <h3>Contact</h3>
            <p className="text-sm text-gray-500 my-1">1800123456</p>
            <p className="text-sm text-gray-500">info@eduassist.com</p>
          </div>
          <SocialLinks />
        </div>
        <QuickLinks />
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-2 pt-12">
        <p className="text-gray-500 text-sm">
          &copy; 2024 EDUAssist. All rights reserved.
        </p>
        <LegalLinks />
      </div>
    </div>
  );
};

export default Footer;
