import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export const CartProductitemDelete = props => {
  return (
    <span
      className="cart__productitem__delete"
      onClick={() => {
        let getCookie = cname => {
          var name = cname + "=";
          var ca = document.cookie.split(";");
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
              c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };
        Axios.post("/removeFromCart", {
          userId: getCookie("c3a4d"),
          productId: props.productId
        }).then(res => {
          swal(res.data.message, { icon: "success" });
          props.stater(res.data.data);
        });
      }}
    />
  );
};
