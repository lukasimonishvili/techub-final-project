import React from "react";
import { ChatCloseImg } from "./chatCloseImg";
import Axios from "axios";

export const ChatClose = () => {
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
    <span
      className="chat__close"
      onClick={() => {
        let chat = document.getElementById("chat");
        let messageIcon = document.getElementById("messageIcon");
        chat.style.display = "none";
        messageIcon.style.display = "block";
        Axios.post("/clearUserNotification", {
          userId: getCookie("c3a4d")
        }).then(res => {
          console.log(res.data.data);
        });
      }}
    >
      <ChatCloseImg />
    </span>
  );
};
