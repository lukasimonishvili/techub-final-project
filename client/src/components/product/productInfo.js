import React from "react";
import { ProductInfoHeader } from "./productInfoHeader";
import { ProductInfoDescription } from "./productInfoDescription";
import { ProductInfoCostQuantity } from "./productInfoCostQuantity";
import { ProductInfoRating } from "./productInfoRating";

export const ProductInfo = () => {
  return (
    <div className="prduct__info fl_dir_col">
      <ProductInfoHeader />
      <ProductInfoDescription />
      <ProductInfoCostQuantity />
      <ProductInfoRating />
    </div>
  );
};
