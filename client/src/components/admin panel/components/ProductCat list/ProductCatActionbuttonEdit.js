import React from "react";
import Axios from "axios";

export const ProductCatActionbuttonEdit = props => {
  return (
    <button
      type="button"
      className="ProductCat__Cat__actionbutton"
      onClick={e => {
        let newTitle = e.target.parentNode.previousSibling;
        let oldTitle = props.cat;
        Axios.post("/editCategory", {
          title: oldTitle,
          newTitle: newTitle.value.toUpperCase()
        }).then(res => {
          alert("Category name updated");
          props.catStater(res.data);
        });
      }}
    >
      Edit
    </button>
  );
};
