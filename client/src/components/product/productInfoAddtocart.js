import React from "react";
import { Link } from "@reach/router";
import Axios from "axios";
import swal from "sweetalert";

export const ProductInfoAddtocart = props => {
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
  if (getCookie("c3a4d").length === 24) {
    return (
      <button
        className="product__info__addtocart fl"
        onClick={() => {
          if (Number(props.amount)) {
            Axios.post(`/addToCart`, {
              userId: getCookie("c3a4d"),
              productId: props.productId
            }).then(res => {
              swal(res.data.message), { icon: "success" };
            });
          } else {
            swal("Product Sold out", { icon: "error" });
          }
        }}
      >
        add to cart
      </button>
    );
  } else {
    return (
      <Link to="/login" className="product__info__addtocart fl">
        add to cart
      </Link>
    );
  }
};
