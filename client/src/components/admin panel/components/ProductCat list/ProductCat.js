import React from "react";
import { ProductCatTitle } from "./ProductCatTitle";
import { ProductCatNewcatbutton } from "./ProductCatNewcatbutton";
import { ProductCatAll } from "./ProductCatAll";
import { ProductCatList } from "./ProductCatList";
import Axios from "axios";

export class ProductCat extends React.Component {

  state = {
    categories: []
  }

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
