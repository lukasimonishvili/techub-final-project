import React from "react";
import { MessageIcon } from "./messageIcon";
import { MessageNotification } from "./messageNotification";

export const Message = () => {
  return (
    <div id="messageIcon"
    onClick={() => {
      let chat = document.getElementById("chat");
      let messageIcon = document.getElementById("messageIcon");
      chat.style.display = "flex";
      messageIcon.style.display = "none";
    }}>
      <MessageIcon />
      <MessageNotification/>
    </div>
  );
};
