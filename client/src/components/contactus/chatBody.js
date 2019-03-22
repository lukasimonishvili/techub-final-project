import React from "react";
import { ChatBodyContainerUser } from "./chatBodyContainerUser";
import { ChatBodyContainerAdmin } from "./chatBodyContainerAdmin";

export const ChatBody = props => {
  return (
    <div className="chat__body fl fl_dir_col">
      {props.chat.map((message, index) => {
        if (message.side === "user") {
          return <ChatBodyContainerUser key={index} txt={message.text} />;
        } else if (message.side === "admin") {
          return <ChatBodyContainerAdmin key={index} txt={message.text} />;
        }
      })}
    </div>
  );
};
