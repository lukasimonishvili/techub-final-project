import React from "react";
import { ContactUserMessagesInputText } from "./contactUserMessagesInputText";
import { ContactUserMessagesInputSend } from "./contactUserMessagesInputSend";
export const ContactUserMessagesInput = () => {
  return (
    <div className="contactuser__leftside__input">
    <ContactUserMessagesInputText/>
    <ContactUserMessagesInputSend/>
    </div>
  );
};
