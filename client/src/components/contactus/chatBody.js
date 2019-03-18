import React from "react";
import { ChatBodyContainerUser } from "./chatBodyContainerUser";
import { ChatBodyContainerAdmin } from "./chatBodyContainerAdmin";

export const ChatBody = () => {
  return (
    <div className="chat__body fl fl_dir_col">
      <ChatBodyContainerUser />
      <ChatBodyContainerAdmin />
    </div>
  );
};
