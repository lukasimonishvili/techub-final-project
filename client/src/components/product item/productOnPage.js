import React from "react";
import { ProductOnPageLinkToProduct } from "./productOnPageLinkToProduct";

export const ProductOnPage = props => {
  return (
    <div className="productOnPage">
      <ProductOnPageLinkToProduct
        productName={props.productName}
        image={props.image}
        price={props.price}
        productId={props.productId}
      />
    </div>
  );
};
