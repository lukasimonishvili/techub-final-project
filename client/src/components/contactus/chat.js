import React from "react";
import { ChatClose } from "./chatClose";
import { ChatBody } from "./chatBody";
import { ChatInput } from "./chatInput";
import Draggable from "react-draggable";

export const Chat = () => {
  return (
    <Draggable>
      <div className="chat fl fl_dir_col" id="chat">
        <ChatClose />
        <ChatBody />
        <ChatInput />
      </div>
    </Draggable>
  );
};
