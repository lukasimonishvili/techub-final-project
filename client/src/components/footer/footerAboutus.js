import React from "react";
import { FooterAboutusHeader } from "./footerAboutusHeader";
import { FooterAboutusInfo } from "./footerAboutusInfo";
import { FooterAboutusName } from "./footerAboutusName";
// import { მუდმივა } from "./საქაღალდე";

export const FooterAboutus = () => {
  return (
    <div className="footer__aboutus  fl fl_dir_col">
      {/* <მუდმივა /> */}
      <FooterAboutusHeader />
      <FooterAboutusInfo />
      <FooterAboutusName author="Luka Simonishvili" />
      <FooterAboutusName author="Zviad Qafianidze" />
      <FooterAboutusName author="Mikheil Mamniashvili" />
      <FooterAboutusName author="Ana Bakidze" />

    </div>
  );
};
