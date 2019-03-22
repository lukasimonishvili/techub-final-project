import React from "react";
import { ProductOnPageImg } from "./productOnPageImg";
import { ProductOnPageName } from "./productOnPageName";
import { ProductOnPageCurenc } from "./productOnPageCurenc";
import { ProductOnPageBuyingoptions } from "./productOnPageBuyingoptions";

export const ProductOnPageLinkToProduct = () => {
  return (
    <div className="productOnPage__linkToProduct">
        <ProductOnPageImg />
        <ProductOnPageName />
        <ProductOnPageCurenc />
        <ProductOnPageBuyingoptions/>
    </div>
  );
};
