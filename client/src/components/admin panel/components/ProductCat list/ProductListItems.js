import React from "react";

export const ProductListItems = () => {
  return (
    <ul className="productlist__list" >
      <li className="productlist__list__item fl fl_jus_bet">
        some product
        <div>
          <button className="ProductCat__Cat__actionbutton">Edit</button>
          <button className="ProductCat__Cat__actionbutton">Delete</button>
        </div>
      </li>
      <li className="productlist__list__item fl fl_jus_bet">
        some product
        <div>
          <button className="ProductCat__Cat__actionbutton">Edit</button>
          <button className="ProductCat__Cat__actionbutton">Delete</button>
        </div>
      </li>
      <li className="productlist__list__item fl fl_jus_bet">
        some product
        <div>
          <button className="ProductCat__Cat__actionbutton">Edit</button>
          <button className="ProductCat__Cat__actionbutton">Delete</button>
        </div>
      </li>
    </ul>
  );
};
