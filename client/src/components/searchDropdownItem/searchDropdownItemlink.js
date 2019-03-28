import React from "react";
import { Link } from "@reach/router";

export const SearchDropdownItemlink = props => {
  if (!props.srch.length) {
    return (
      <span className="searchdropdown__item fl fl_dir_col">
        <p>No Result</p>
      </span>
    );
  } else {
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
  }
};
