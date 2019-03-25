import React from "react";
import { ProductCatTitle } from "./ProductCatTitle";
import { ProductCatNewcatbutton } from "./ProductCatNewcatbutton";
import { ProductCatAll } from "./ProductCatAll";
import { ProductCatList } from "./ProductCatList";

export class ProductCat extends React.Component {
  render() {
    return (
      <div className="ProductCat">
        <ProductCatTitle />
        <ProductCatNewcatbutton />
        <ProductCatAll />
        <ProductCatList />
      </div>
    );
  }
}
