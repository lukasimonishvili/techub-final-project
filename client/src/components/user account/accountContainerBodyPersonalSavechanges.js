import React from "react";
import Axios from "axios";

export const AccountContainerBodyPersonalSavechanges = props => {
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
      className="account__container__peronal--savechanges"
      onClick={() => {
        let name = document.getElementById("name");
        let lastName = document.getElementById("lastName");
        let oldPassword = document.getElementById("oldPassword");
        let newPassword = document.getElementById("newPassword");
        let rePassword = document.getElementById("rePassord");
        if (newPassword.value !== "") {
          if (newPassword.value !== rePassword.value) {
            alert("Those passwords didn`t match. Try again");
          } else {
            Axios.post(`/editUser/${getCookie("c3a4d")}`, {
              name: name.value,
              lastName: lastName.value,
              oldPassword: oldPassword.value,
              newPassword: newPassword.value
            }).then(res => {
              props.userStater(res.data.data);
              name.value = res.data.data.name;
              lastName.value = res.data.data.lastName;
              oldPassword.value = "";
              rePassword.value = "";
              newPassword.value = "";
              alert(res.data.message);
            });
          }
        } else {
          Axios.post(`/editUser/${getCookie("c3a4d")}`, {
            name: name.value,
            lastName: lastName.value,
            oldPassword: oldPassword.value
          }).then(res => {
            name.value = res.data.data.name;
            lastName.value = res.data.data.lastName;
            oldPassword.value = "";
            rePassword.value = "";
            newPassword.value = "";
            props.userStater(res.data.data);
            alert(res.data.message);
          });
        }
      }}
    >
      Save changes
    </button>
  );
};
