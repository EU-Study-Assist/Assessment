"use client";

import Image from "next/image";
import logo from "../assets/svg/logo.svg";
import MNavs from "../ui/mobile/navs";
import { useState } from "react";
import DNavs from "../ui/desktop/navs";

const NavBar = () => {
  const [navState, setNavState] = useState<boolean>(false);

  const toggle = () => {
    return setNavState(!navState);
  };

  return (
    <div className="flex bg-white justify-between items-center px-3 lg:px-14 py-4">
      <Image src={logo} alt="EU Logo" />
      {/* Mobile Navs */}
      <MNavs show={navState} toggleNav={toggle} />
      {/* Desktop Navs */}
      <DNavs />
    </div>
  );
};

export default NavBar;
