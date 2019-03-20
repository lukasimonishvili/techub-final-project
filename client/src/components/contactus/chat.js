import React from "react";
import { ChatClose } from "./chatClose";
import { ChatBody } from "./chatBody";
import { ChatInput } from "./chatInput";

export const Chat = () => {
  return (
      <div className="chat fl fl_dir_col" id="chat">
        <ChatClose />
        <ChatBody />
        <ChatInput />
      </div>
  );
};
