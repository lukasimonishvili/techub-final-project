import React from "react";
import { HeaderSidebar } from "./headerSidebar";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { HeaderSignin } from "./headerSignin";

export const HeaderNav = () => {
  return (
    <ul className="header__nav fl fl_jus_bet">
      <div className="header__flex">
        <HeaderSidebar />
        <HeaderLogo />
      </div>
      <div className="header__flex">
        <HeaderSearch />
        <HeaderSignin />
      </div>
    </ul>
  );
};
