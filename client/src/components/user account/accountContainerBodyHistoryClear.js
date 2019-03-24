import React from "react";
import Axios from "axios";

export const AccountContainerBodyHistoryClear = props => {
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
    <button
      className="account__container__body--hisclear"
      onClick={() => {
        Axios.post("/clearShoppingHistory", {
          userId: getCookie("c3a4d")
        }).then(res => {
          if (res.data.message) {
            props.historyStater(res.data.data);
          }
        });
      }}
    >
      Clear shopping history
    </button>
  );
};
