import React from "react";
import Axios from "axios";

export const ProductCatNewcatbutton = () => {
  return (
    <>
      <input
        className="ProductCat__Newcatbutton"
        id="newCategory"
        type="text"
        placeholder="add new category..."
      />
      <button
        className="ProductCat__Newcatbutton"
        type="button"
        onClick={() => {
          let newCategory = document.getElementById("newCategory");
          if (newCategory.value.length) {
            Axios.post("/addCategory", { title: newCategory.value }).then(
              res => {
                alert(res.data);
                window.location.replace("/productlist");
              }
            );
          }
        }}
      >
        Add new category
      </button>
    </>
  );
};
