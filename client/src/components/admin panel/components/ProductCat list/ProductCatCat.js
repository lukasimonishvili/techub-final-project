import React from "react";

import { ProductCatActionbuttonEdit } from "./ProductCatActionbuttonEdit";
import { ProductCatActionbuttonDellete } from "./ProductCatActionbuttonDellete";
import { ProductList } from "./ProductList";

export const ProductCatCat = props => {
  return (
    <div className="ProductCat__Cat">
      <input
        className="ProductCat__Cat__Link"
        id="inputInProductCat"
        type="text"
        placeholder={props.prodCat}
      />
      <div>
        <ProductCatActionbuttonEdit />
        <ProductCatActionbuttonDellete />
      </div>
      <ProductList />
    </div>
  );
};
