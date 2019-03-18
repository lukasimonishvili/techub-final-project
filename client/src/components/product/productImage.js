import React from "react"
import { ProductImageImg } from "./productImageImg";
import { ProductImageContainer } from "./productImageContainer";

export const ProductImage = () => {
    return (
        <div className="product__image">
        <ProductImageImg/>
        <ProductImageContainer/>
        </div>
    )
}