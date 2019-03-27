import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export const AccountContainerBodyDepositMakedeposit = props => {
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
      className="account__container__body--makedeposit"
      onClick={() => {
        let fillBalance = document.getElementById("fillBalance");
        if (fillBalance.value.length) {
          Axios.post("/fillBalance", {
            userId: getCookie("c3a4d"),
            balance: fillBalance.value
          }).then(res => {
            if (res.data.message == "Balance filled") {
              swal(res.data.message, { icon: "success" });
            } else {
              swal(res.data.message, { icon: "error" });
            }
            fillBalance.value = "";
            props.baanceStater(res.data.balance);
          });
        }
      }}
    >
      Make Deposit
    </button>
  );
};
