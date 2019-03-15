import React from "react";

export const HeaderSearchButton = () => {
  return (
    <button
      className="header__search__button"
      onClick={() => {
        fetch("http://localhost:3001/comment/5c8b832a8b2e5520a3f022c1")
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      }}
    >
      Search
    </button>
  );
};
