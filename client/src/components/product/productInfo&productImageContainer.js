import React from "react";
import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";

export const ProductInfoImageContainer = () => {
  return (
    <div className="fl">
      <ProductImage />
      <ProductInfo />
    </div>
  );
};
