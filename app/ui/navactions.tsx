import React from "react";

const NavActions = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button className="bg-white text-primary py-2 px-3">Login</button>
      <button className="bg-primary text-white py-2 px-3 rounded">
        Get Loan
      </button>
    </div>
  );
};

export default NavActions;
