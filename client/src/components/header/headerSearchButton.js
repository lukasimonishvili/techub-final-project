import React from "react";
import swal from "sweetalert";

export const HeaderSearchButton = () => {
  return (
    <button
      className="header__search__button"
      onClick={() => {
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "info",
          button: "OK!",
        });
      }}
    >
      Search
    </button>
  );
};
