import React from "react";
import { ProductOnPageImg } from "./productOnPageImg";
import { ProductOnPageName } from "./productOnPageName";
import { ProductOnPageCurenc } from "./productOnPageCurenc";
import { ProductOnPageBuyingoptions } from "./productOnPageBuyingoptions";

export const ProductOnPageLinkToProduct = props => {
  return (
    <div className="productOnPage__linkToProduct">
      <ProductOnPageImg image={props.image} />
      <ProductOnPageName productName={props.productName} />
      <ProductOnPageCurenc price={props.price} />
      <ProductOnPageBuyingoptions productId={props.productId} />
    </div>
  );
};
