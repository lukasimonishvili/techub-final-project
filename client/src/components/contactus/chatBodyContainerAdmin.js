import React from "react";
import { ChatBodyMessageAdmin } from "./chatBodyMessageAdmin";

export const ChatBodyContainerAdmin = props => {
  return (
    <div className="chat__body__container--admin fl fl_dir_col">
      <ChatBodyMessageAdmin txt={props.txt} />
    </div>
  );
};
