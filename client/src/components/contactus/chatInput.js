import React from "react";
import { ChatInputText } from "./chatInputText";
import { ChatInputSend } from "./chatInputSend";

export const ChatInput = props => {
  return (
    <div className="chat__input fl">
      <ChatInputText />
      <ChatInputSend stater={props.stater} />
    </div>
  );
};
