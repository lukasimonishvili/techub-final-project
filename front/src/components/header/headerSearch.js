import React from "react";
import { HeaderSearchInput } from "./headerSearchInput";
import { HeaderSearchButton } from "./headerSearchButton";
import { HeaderSearchButtonDetailed } from "./headerSearchButtonDetailed";

export const HeaderSearch = () => {
  return (
    <li class="header__search">
      <HeaderSearchInput />
      <HeaderSearchButton />
      <HeaderSearchButtonDetailed/>
    </li>
  );
};
