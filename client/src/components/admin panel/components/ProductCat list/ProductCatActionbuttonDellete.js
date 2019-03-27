import React from "react";
import Axios from "axios";
import swal from "sweetalert";

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
        swal({
          title: "Are you sure?",
          text: `Removing ${
            props.cat
          } category also removes products witch have ${props.cat} category`,
          buttons: true,
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            Axios.post("/deleteCategory", { title: props.cat }).then(res => {
              swal(res.data.message, {icon: "success"});
            });
            props.catStater(newCatList);
          }
        });
      }}
    >
      Delete
    </button>
  );
};
