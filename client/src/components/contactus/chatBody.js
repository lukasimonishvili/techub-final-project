import React from "react";
import { ChatBodyMessageUser } from "./chatBodyMessageUser";
import { ChatBodyMessageAdmin } from "./chatBodyMessageAdmin";

export const ChatBody = props => {
  return (
    <div className="chat__body">
      <div className="chat__body__wrapper" id="chatBody">
        {props.chat.map((message, index) => {
          if (message.side === "user") {
            return <ChatBodyMessageUser key={index} txt={message.text} />;
          } else if (message.side === "admin") {
            return <ChatBodyMessageAdmin key={index} txt={message.text} />;
          }
        })}
      </div>
    </div>
  );
};
