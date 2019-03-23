import React from "react";

import { ProductCatActionbuttonEdit } from "./ProductCatActionbuttonEdit";
import { ProductCatActionbuttonDellete } from "./ProductCatActionbuttonDellete";
import { ProductList } from "./ProductList";

export const ProductCatCat = props => {
  return (
    <div className="ProductCat__Cat">
      <span className="ProductCat__Cat__Link">{props.prodCat}</span>
      <div>
        <ProductCatActionbuttonEdit />
        <ProductCatActionbuttonDellete />
      </div>
      <ProductList />
    </div>
  );
};
