import React from "react";
import { ProductInfoCost } from "./ProductInfoCost";
import { ProductInfoAvailable } from "./productInfoAvailable";

export const ProductInfoCostQuantity = () => {
  return (
    <div className="fl">
      <ProductInfoCost />
      <ProductInfoAvailable />
    </div>
  );
};
