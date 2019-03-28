import React from "react";
import Axios from "axios";
import swal from "sweetalert";
import { LoginUsername } from "./loginUsername";
import { LoginPassword } from "./loginPassword";
import { LoginSignin } from "./loginSignin";
import { LoginRegister } from "./loginRegister";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
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
          removeCookie("c914847298b1b13064c3a4d");
          setCookie("c914847298b1b13064c3a4d", "c914847298b1b13064c3a4d", 3650);
          window.location.replace("/");
        } else {
          console.log(res.data.data._id);
          console.log(String(res.data.data._id));
          if (res.data.message === "Okay") {
            removeCookie("c3a4d");
            let tostring = String(res.data.data._id);
            setCookie("c3a4d", tostring, 3650);
            window.location.replace("/");
          } else {
            swal(res.data.message, { icon: "error" });
            if (
              res.data.message ==
              "The eMail you entered doesn't match any account"
            ) {
              eMail.style.borderColor = "red";
            } else if (
              res.data.message == "The password you entered is incorrect"
            ) {
              password.style.borderColor = "red";
            }
          }
        }
      });
    }
  }

  componentDidMount() {
    window.onkeyup = e => {
      if (e.keyCode === 13) {
        this.login();
      }
    };
  }

  render() {
    return (
      <div className="login fl fl_jus_bet">
        <LoginUsername />
        <LoginPassword />
        <LoginSignin login={this.login} />
        <LoginRegister />
      </div>
    );
  }
}
