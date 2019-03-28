import React from "react";
import Axios from "axios";
import img from "../../img/thumb-down.svg";
export const ProductInfoRatingDilikeImg = props => {
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
  return (
    <img
      src={img}
      alt=""
      onClick={() => {
        if (getCookie("c3a4d").length === 24) {
          Axios.post("/disLikeProduct", {
            userId: getCookie("c3a4d"),
            productId: props.productId
          }).then(res => {
            props.likeStater(res.data.likes.length);
            props.disLikeStater(res.data.disLikes.length);
          });
        }
      }}
    />
  );
};
