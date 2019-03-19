import React from "react";
import { FooterAboutusHeader } from "./footerAboutusHeader";
import { FooterAboutusInfo } from "./footerAboutusInfo";
import { FooterAboutusName } from "./footerAboutusName";

export const FooterAboutus = () => {
  return (
    <div className="footer__aboutus  fl fl_dir_col">
      <FooterAboutusHeader />
      <FooterAboutusInfo />
      <FooterAboutusName author="Luka Simonishvili" />
      <FooterAboutusName author="Zviad Qafianidze" />
      <FooterAboutusName author="Mikheil Mamniashvili" />
      <FooterAboutusName author="Ana Bakidze" />
    </div>
  );
};
