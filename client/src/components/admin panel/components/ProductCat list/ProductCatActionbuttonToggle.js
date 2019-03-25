import React from "react";

export const ProductCatActionbuttonToggle = () => {
  return (
    <button className="ProductCat__Cat__actionbutton"
      onClick={e => {
        e.target.parentNode.parentNode.childNodes[2].classList.toggle("block");
      }}
    >
      toggle
    </button>
  );
};
