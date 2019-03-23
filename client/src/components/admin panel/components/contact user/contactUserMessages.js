import React from "react";
import { ContactUserMessagesBody } from "./contactUserMessagesBody";
import { ContactUserMessagesInput } from "./contactUserMessagesInput";

export const ContactUserMessages = props => {
  return (
    <div className="contactuser__leftside fl fl_dir_col">
      <ContactUserMessagesBody chat={props.chat} userName={props.userName} />
      <ContactUserMessagesInput
        chatStater={props.chatStater}
        userId={props.userId}
        userName={props.userName}
      />
    </div>
  );
};
