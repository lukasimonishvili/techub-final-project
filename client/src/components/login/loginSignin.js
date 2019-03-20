import React from "react";
import Axios from "axios";

export const LoginSignin = () => {
  return (
    <button
      className="login__signin"
      onClick={() => {
        let eMail = document.getElementById("eMail");
        let password = document.getElementById("password");
        let removeCookie = cname => {
          var d = new Date();
          d.setTime(d.getTime() + 0 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=;" + expires + ";path=/";
        };
        let setCookie = (cname, cvalue, exdays) => {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        if (eMail.value.length && password.value.length) {
          Axios.post("/login", {
            eMail: eMail.value,
            password: password.value
          }).then(res => {
            if (res.data.data.status) {
              removeCookie("admin");
              setCookie("admin", true, 3650);
              window.location.replace("/");
            } else {
              removeCookie("user");
              setCookie("user", true, 3650);
              alert(`hello ${res.data.data.name}`);
              window.location.replace("/");
            }
          });
        }
      }}
    >
      Sign in
    </button>
  );
};
