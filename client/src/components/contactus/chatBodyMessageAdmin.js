import React from "react";
import { PromiseProvider } from "mongoose";

export const ChatBodyMessageAdmin = props => {
  return <div className="chat__body__message--admin">{props.txt}</div>;
};
