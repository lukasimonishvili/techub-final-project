import React from "react";
import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";

export const Product = () => {
  return (
    <div className="product fl">
      <ProductImage />
      <ProductInfo/>
    </div>
  );
};
