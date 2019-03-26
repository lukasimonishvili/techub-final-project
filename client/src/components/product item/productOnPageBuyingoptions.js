import React from "react";
import { ProductOnPageDetails } from "./productOnPageDetails";
import { ProductOnPageAddtocart } from "./productOnPageAddtocart";

export const ProductOnPageBuyingoptions = props => {
  return (
    <div className="productOnPage_name_buttons fl">
      <ProductOnPageDetails productId={props.productId} />
      <ProductOnPageAddtocart
        productId={props.productId}
        amount={props.amount}
        componentClass="span"
      />
    </div>
  );
};
