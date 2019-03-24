import React from "react";
import { ProductListItemProduct } from "./ProductListItemProduct";

export const ProductListItems = () => {
  return (
    <ul className="productlist__list" >
      <li className="productlist__list__item fl fl_jus_bet">
       <div> some product</div>
        <div className="btn-container">
          <button className="ProductCat__Cat__actionbutton">Edit</button>
          <button className="ProductCat__Cat__actionbutton">Delete</button>
        </div>
      </li>
        <ProductListItemProduct/>
      
    </ul>
  );
};
