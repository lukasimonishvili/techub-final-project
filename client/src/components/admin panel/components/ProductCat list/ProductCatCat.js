import React from "react";

import { ProductCatActionbuttonEdit } from "./ProductCatActionbuttonEdit";
import { ProductCatActionbuttonDellete } from "./ProductCatActionbuttonDellete";
import { ProductList } from "./ProductList";
import { ProductCatActionbuttonToggle } from "./ProductCatActionbuttonToggle";

export const ProductCatCat = props => {
  return (
    <div className="ProductCat__Cat">
      <input
        className="ProductCat__Cat__Link"
        id="inputInProductCat"
        type="text"
        placeholder={props.cat}
        defaultValue={props.cat}
      />
      <div>
        <ProductCatActionbuttonToggle />
        <ProductCatActionbuttonEdit
          cat={props.cat}
          catStater={props.catStater}
        />
        <ProductCatActionbuttonDellete
          cat={props.cat}
          catStater={props.catStater}
          catList={props.catList}
        />
      </div>
      <ProductList catList={props.catList} cat={props.cat} />
    </div>
  );
};
