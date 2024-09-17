import React from "react";

const QuickLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 my-4 lg:my-0 lg:flex-1 lg:gap-16">
      <div className="flex flex-col gap-2 lg:gap-4 mb-2 linksParent">
        <h2>Company</h2>
        <h3>About</h3>
        <h3>Leadership</h3>
        <h3>Blog</h3>
        <h3>Referral Programs</h3>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 linksParent">
        <h2>Loan Plans</h2>
        <h3>Overview</h3>
        <h3>Terms</h3>
        <h3>FAQ</h3>
      </div>
    </div>
  );
};

export default QuickLinks;
