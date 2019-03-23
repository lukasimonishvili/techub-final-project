import React, { Component } from "react";
import "./App.css";
import { Admin } from "./components/admin panel/components/adminsidebar/admin";
import { User } from "./User";
import { LoggedInUser } from "./loggedInUser";

class App extends Component {
  state = {
    c914847298b1b13064c3a4d: null,
    c3a4d: null
  };

  setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  removeCookie = cname => {
    var d = new Date();
    d.setTime(d.getTime() + 0 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
  };

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

  checkCookie = (cookieName, value, time) => {
    var cookie = this.getCookie(cookieName);
    if (cookie === "") {
      this.setCookie(cookieName, value, time);
    }
  };

  componentDidMount() {
    this.checkCookie("c914847298b1b13064c3a4d", null, 3650);
    this.checkCookie("c3a4d", null, 3650);
  }

  render() {
    if (
      this.getCookie("c914847298b1b13064c3a4d") === "c914847298b1b13064c3a4d"
    ) {
      return <Admin />;
    } else if (this.getCookie("c3a4d").length === 24) {
      return <LoggedInUser cookie={this.getCookie("c3a4d")} />;
    } else {
      return <User />;
    }
  }
}

export default App;
