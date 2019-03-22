import React from "react"
import { ProductOnPageDetails } from "./productOnPageDetails";
import { ProductOnPageAddtocart } from "./productOnPageAddtocart";

export const ProductOnPageBuyingoptions = () => {
    return <div className="productOnPage_name_buttons fl">
    <ProductOnPageDetails/>
    <ProductOnPageAddtocart componentClass="span"/>
    </div>
}