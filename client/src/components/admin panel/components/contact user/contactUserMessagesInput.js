import React from "react";
import { ContactUserMessagesInputText } from "./contactUserMessagesInputText";
import { ContactUserMessagesInputSend } from "./contactUserMessagesInputSend";

export const ContactUserMessagesInput = props => {
  return (
    <div className="contactuser__leftside__input">
      <ContactUserMessagesInputText />
      <ContactUserMessagesInputSend
        chatStater={props.chatStater}
        userId={props.userId}
        userName={props.userName}
      />
    </div>
  );
};
