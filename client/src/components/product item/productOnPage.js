import React from "react";
import { ProductOnPageLinkToProduct } from "./productOnPageLinkToProduct";
import soldout from "../../img/soldout.png";
export const ProductOnPage = props => {
  let sold = Number(props.amount);
  if (sold) {
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
  } else {
    return (
      <div className="productOnPage">
        <img src={soldout} className="productitem__soldout" />
        <ProductOnPageLinkToProduct
          productName={props.productName}
          image={props.image}
          price={props.price}
          productId={props.productId}
          amount={props.amount}
        />
      </div>
    );
  }
};
