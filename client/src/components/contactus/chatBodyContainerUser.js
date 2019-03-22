import React from "react";
import { ChatBodyMessageUser } from "./chatBodyMessageUser";

export const ChatBodyContainerUser = props => {
  return (
    <div className="chat__body__container--user">
      <ChatBodyMessageUser txt={props.txt} />
    </div>
  );
};
