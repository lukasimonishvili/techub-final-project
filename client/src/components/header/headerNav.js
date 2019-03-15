import React from "react";
import { HeaderSidebar } from "./headerSidebar";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { HeaderSignin } from "./headerSignin";
import { HeaderCart } from "./headerCart";

export const HeaderNav = () => {
  return (
    <ul className="header__nav fl fl_jus_bet">
      <HeaderSidebar />
      <HeaderLogo />
      <HeaderSearch />
      <HeaderSignin />
      <HeaderCart />
    </ul>
  );
};
