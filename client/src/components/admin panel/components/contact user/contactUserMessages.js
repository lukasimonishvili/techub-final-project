import React from "react";
import { ContactUserMessagesBody } from "./contactUserMessagesBody";
import { ContactUserMessagesInput } from "./contactUserMessagesInput";

export const ContactUserMessages = () => {
  return (
    <div className="contactuser__leftside fl fl_dir_col">
      <ContactUserMessagesBody />
      <ContactUserMessagesInput />
    </div>
  );
};
