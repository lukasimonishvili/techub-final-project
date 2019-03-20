import React from "react";
import { HeaderSidebar } from "./headerSidebar";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { HeaderCart } from "./headerCart";
import { Profile } from "./Profile";
export const LoggedInHeaderNav = () => {
  return (
    <ul className="header__nav fl fl_jus_bet">
      <HeaderSidebar />
      <HeaderLogo />
      <HeaderSearch />
      <Profile/>
      <HeaderCart />
    </ul>
  );
};
