import React from "react";
import { ProductOnPageImg } from "./productOnPageImg";
import { ProductOnPageName } from "./productOnPageName";
import { ProductOnPageDescr } from "./productOnPageDescr";
import { ProductOnPagePrice } from "./productOnPagePrice";
import { ProductOnPageCurenc } from "./productOnPageCurenc";

export const ProductOnPageLinkToProduct = () => {
  return (
    <a className="productOnPage__linkToProduct">
        <ProductOnPageImg />
        <ProductOnPageName />
        <ProductOnPageDescr />
        <ProductOnPagePrice />
        <ProductOnPageCurenc />
    </a>
  );
};
