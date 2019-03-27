import React from "react";
import Axios from "axios";
import swal from "sweetalert";

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
                swal(res.data.message, { icon: "success" });
                setTimeout(() => {
                  window.location.replace("/productlist");
                }, 1000);
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
