import React from "react";
import { ProductCatTitle } from "./ProductCatTitle";
import { ProductCatNewcatbutton } from "./ProductCatNewcatbutton";
import { ProductCatAll } from "./ProductCatAll";
import { ProductCatList } from "./ProductCatList";

export const ProductCat = () => {
  return (
    <div className="ProductCat">
      <ProductCatTitle />
      <ProductCatNewcatbutton />
      <ProductCatAll />
      <ProductCatList />
    </div>
  );
};
