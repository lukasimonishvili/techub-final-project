import React from "react";

export const ChatInputText = () => {
  return (
    <textarea
      className="chat__input__text"
      name="chat"
      cols="40"
      rows="2"
      placeholder="Type your message here"
    />
  );
};
