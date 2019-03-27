import React from "react";
import { Link } from "@reach/router";
import Axios from "axios";

export class ProductOnPageAddtocart extends React.Component {
  getCookie = cname => {
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
  render() {
    if (this.getCookie("c3a4d").length === 24) {
      return (
        <button
          className="productOnPage_name_buttons-addtocart"
          onClick={() => {
            if (Number(this.props.amount)) {
              Axios.post(`/addToCart`, {
                userId: this.getCookie("c3a4d"),
                productId: this.props.productId
              }).then(res => {
                swal(res.data.message, { icon: "success" });
              });
            } else {
              swal("product sold out", { icon: "error" });
            }
          }}
        >
          Add to cart
        </button>
      );
    } else {
      return (
        <Link
          to="/login"
          className="productOnPage_name_buttons-addtocart-link"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Add to cart
        </Link>
      );
    }
  }
}
