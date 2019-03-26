import React from "react";
import axios from "axios";

export const HeaderSearchInput = () => {
  return (
    <input
      type="search"
      className="header__search__input"
      placeholder="Search"
      onKeyUp={e => {
        if (e.target.value !== "") {
          axios.get(`/search/${e.target.value}`).then(res => {
            if (res.data[0] === "<" || !res.data.length) {
              alert("No result!");
            } else {
              alert(res.data[0].title);
            }
            console.log(res);
          });
        }
      }}
    />
  );
};
