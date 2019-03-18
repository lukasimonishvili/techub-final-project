import React from "react";
import { ChatInputText } from "./chatInputText";
import { ChatInputSend } from "./chatInputSend";
export const ChatInput = () => {
  return (
    <div className="chat__input fl">
      <ChatInputText />
      <ChatInputSend />
    </div>
  );
};
