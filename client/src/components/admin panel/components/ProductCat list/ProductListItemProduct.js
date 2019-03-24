import React from "react";

export const ProductListItemProduct = () => {
  return (
    <div className="productlist__edit">
      <div className="productlist__edit__images fl fl_jus_bet">
        <div className="productlist__edit__images--item">
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </div>
        <div className="productlist__edit__images--item">
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </div>
        <div className="productlist__edit__images--item">
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </div>
        <div className="productlist__edit__images--item">
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </div>
        <div className="productlist__edit__images--item">
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </div>
      </div>
      <div className="additem">
        <input
          className="additem__upload"
          type="file"
          multiple
          accept="image/png, image/jpeg"
          name="upliad images"
          placeholder="upliad images"
        />
        <input
          className="additem__name"
          type="text"
          name="product name"
          placeholder="product name"
        />
        <select className="additem__category" name="product category">
          <option value="product category">product category</option>
          <option value="product category 1">product category 1</option>
        </select>
        <textarea
          className="additem__description"
          name="product description"
          cols="30"
          rows="3"
          placeholder="product description"
        />
        <input
          className="additem__quantity"
          type="number"
          placeholder="product quantity"
        />
        <input
          className="additem__cost"
          type="number"
          placeholder="product cost"
        />
        <button className="additem__send">Save</button>
      </div>
    </div>
  );
};
