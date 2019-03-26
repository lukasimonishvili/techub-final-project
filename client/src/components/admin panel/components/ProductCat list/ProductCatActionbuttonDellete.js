import React from "react";
import Axios from "axios";

export const ProductCatActionbuttonDellete = props => {
  return (
    <button
      type="button"
      className="ProductCat__Cat__actionbutton"
      onClick={() => {
        let newCatList = props.catList;
        for (let i = 0; i < newCatList.length; i++) {
          if (newCatList[i].title == props.cat) {
            newCatList.splice(i, 1);
            break;
          }
        }
        Axios.post("/deleteCategory", { title: props.cat }).then(res => {
          alert(res.data.message);
        });
        props.catStater(newCatList);
      }}
    >
      Delete
    </button>
  );
};
