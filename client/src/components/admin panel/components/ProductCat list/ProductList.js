import React from "react";
import { ProductListItems } from "./ProductListItems";

export const ProductList = props => {
  return (
    <div className="productlist" id="productListAdmin">
      <ProductListItems
        catStater={props.catStater}
        catList={props.catList}
        cat={props.cat}
      />
    </div>
  );
};
