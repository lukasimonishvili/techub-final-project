import React from "react";
import axios from "axios";

export const HeaderSearchInput = props => {
  return (
    <input
      type="search"
      className="header__search__input"
      placeholder="Search"
      onKeyUp={e => {
        if (e.target.value !== "") {
          axios.get(`/search/${e.target.value}`).then(res => {
            if (res.data[0] === "<" || !res.data.length) {
              let searchDr = document.getElementById("searchDr");
              props.stater([]);
              searchDr.style.display = "block";
            } else {
              let searchDr = document.getElementById("searchDr");
              searchDr.style.display = "block";
              props.stater(res.data);
            }
          });
        }
      }}
      onBlur={e => {
        let searchDr = document.getElementById("searchDr");
        if (!e.target.value.length) {
          searchDr.style.display = "none";
          e.target.value = "";
          props.stater([]);
        }
      }}
    />
  );
};
