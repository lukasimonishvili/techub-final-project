import React from "react";
import { ProductCatTitle } from "./ProductCatTitle";
import { ProductCatNewcatbutton } from "./ProductCatNewcatbutton";
import { ProductCatAll } from "./ProductCatAll";
import { ProductCatList } from "./ProductCatList";
// import { შვილისმუდმივა } from "./საქაღალდე";

export const ProductCat = () => {
  return (
    <div className="ProductCat">
      <ProductCatTitle />
      <ProductCatNewcatbutton />
      <ProductCatAll />
      <ProductCatList />
        {/* <შვილის მუდმივა /> */}
    </div>
  );
};
