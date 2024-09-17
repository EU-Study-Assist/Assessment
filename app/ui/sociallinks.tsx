import React from "react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <BsTwitterX />
      <BsInstagram />
      <FaFacebook />
      <BsLinkedin />
    </div>
  );
};

export default SocialLinks;
