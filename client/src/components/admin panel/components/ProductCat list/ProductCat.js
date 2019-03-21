import React from "react";
import { ProductCatTitle } from "./ProductCatTitle";
import { ProductCatNewcatbutton } from "./ProductCatNewcatbutton";
import { ProductCatAll } from "./ProductCatAll";
// import { შვილისმუდმივა } from "./საქაღალდე";

export const ProductCat = () => {
  return (
    <div className="ProductCat">
      <ProductCatTitle />
      <ProductCatNewcatbutton />
      <ProductCatAll />
        {/* <შვილის მუდმივა /> */}
    </div>
  );
};
