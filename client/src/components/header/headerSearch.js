import React from "react";
import { HeaderSearchInput } from "./headerSearchInput";
import { SearchDropdownItem } from "../searchDropdownItem/searchDropdownItem";

export const HeaderSearch = () => {
  return (
    <li className="header__search fl fl_jus_bet">
      <HeaderSearchInput />
      <SearchDropdownItem/>
    </li>
  );
};
