import React from "react";
import { Link } from "@reach/router";

export const SearchDropdownItemlink = props => {
  return (
    <span className="searchdropdown__item fl fl_dir_col">
      {props.srch.map(srch => {
        return (
          <Link key={srch._id} to={`/product/${srch._id}`}>
            {srch.title}
          </Link>
        );
      })}
    </span>
  );
};
