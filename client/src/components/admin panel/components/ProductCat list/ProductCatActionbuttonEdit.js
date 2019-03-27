import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export const ProductCatActionbuttonEdit = props => {
  return (
    <button
      type="button"
      className="ProductCat__Cat__actionbutton"
      onClick={e => {
        let newTitle = e.target.parentNode.previousSibling;
        let oldTitle = props.cat;
        if (newTitle.value.toUpperCase() !== oldTitle) {
          Axios.post("/editCategory", {
            title: oldTitle,
            newTitle: newTitle.value.toUpperCase()
          }).then(res => {
            swal({
              title: "Updated",
              text: `${oldTitle} reanemed to ${newTitle.value.toUpperCase()}`,
              icon: "success"
            });
            props.catStater(res.data);
          });
        }
      }}
    >
      Edit
    </button>
  );
};
