import React from "react";
import { MessageIcon } from "./messageIcon";
import { MessageNotification } from "./messageNotification";
import Axios from "axios";

export const Message = () => {
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
    <div
      id="messageIcon"
      onClick={() => {
        let chat = document.getElementById("chat");
        let messageIcon = document.getElementById("messageIcon");
        let notification = document.getElementById("notification");
        notification.style.display = "none";
        chat.style.display = "flex";
        messageIcon.style.display = "none";
        Axios.post("/clearUserNotification", {
          userId: getCookie("c3a4d")
        });
      }}
    >
      <MessageIcon />
      <MessageNotification />
    </div>
  );
};
