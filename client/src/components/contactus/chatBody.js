import React from "react";
// import { ChatBodyContainerUser } from "./chatBodyContainerUser";
import {ChatBodyMessageUser} from "./chatBodyMessageUser"
// import { ChatBodyContainerAdmin } from "./chatBodyContainerAdmin";
import { ChatBodyMessageAdmin } from "./chatBodyMessageAdmin";

export const ChatBody = props => {
  return (
    <div className="chat__body fl">
      {props.chat.map((message, index) => {
        if (message.side === "user") {
          return <ChatBodyMessageUser key={index} txt={message.text} />;
        } else if (message.side === "admin") {
          return <ChatBodyMessageAdmin key={index} txt={message.text} />;
        }
      })}
    </div>
  );
};
