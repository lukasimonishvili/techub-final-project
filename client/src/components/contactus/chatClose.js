import React from "react";
import { ChatCloseImg } from "./chatCloseImg";

export const ChatClose = () => {
  return (
    <span className="chat__close" onClick={ () => {
      let chat = document.getElementById("chat");
      let messageIcon = document.getElementById("messageIcon");
      chat.style.display = "none";
      messageIcon.style.display = "block";
    }}
    >
      <ChatCloseImg />
    </span>
  );
};
