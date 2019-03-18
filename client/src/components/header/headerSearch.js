import React from "react";
import { HeaderSearchInput } from "./headerSearchInput";
import { HeaderSearchButton } from "./headerSearchButton";
import { HeaderSearchButtonDetailed } from "./headerSearchButtonDetailed";

export const HeaderSearch = () => {
  return (
    <li className="header__search fl fl_jus_bet">
      <HeaderSearchInput />
      <HeaderSearchButton />
      <HeaderSearchButtonDetailed/>
    </li>
  );
};
