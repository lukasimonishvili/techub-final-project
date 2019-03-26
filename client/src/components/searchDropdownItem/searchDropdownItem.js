import React from "react";
import { SearchDropdownItemlink } from "./searchDropdownItemlink";

export const SearchDropdownItem = props => {
  return (
    <div id="searchDr" className="searchdropdown">
      <SearchDropdownItemlink srch={props.srch} />
    </div>
  );
};
