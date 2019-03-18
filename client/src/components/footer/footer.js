import React from "react";
import { SpanHeaderLogo } from "./spanHeaderLogo";
import { FooterAboutus } from "./footerAboutus";
// import { მუდმივა } from "./საქაღალდე";

export const Footer = () => {
  return (
    <div className="footer fl">
      <SpanHeaderLogo />
      <FooterAboutus />
      {/* <მუდმივა /> */}
    </div>
  );
};
