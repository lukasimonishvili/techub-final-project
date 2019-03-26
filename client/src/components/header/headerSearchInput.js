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
              let searchDr = document.getElementById("searchDr");
              let searchBox = searchDr.childNodes[0];
              searchBox.innerHTML = "";
              searchDr.style.display = "block";
              for (let i = 0; i < res.data.length; i++) {
                searchBox.innerHTML += `<a class=""searchdropdown__item--name"" href="product/${
                  res.data[i]._id
                }">${res.data[i].title}</a>`;
              }
            }
          });
        }
      }}
      onBlur={e => {
        let searchDr = document.getElementById("searchDr");
        let searchBox = searchDr.childNodes[0];
        searchBox.innerHTML = "";
        searchDr.style.display = "none";
        e.target.value = "";
      }}
    />
  );
};
