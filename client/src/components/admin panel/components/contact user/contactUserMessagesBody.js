import React from "react";
import { ContactUserMessagesBodyAdmin } from "./contactUserMessagesBodyAdmin";
import { ContactUserMessagesBodyUser } from "./contactUserMessagesBodyUser";
import { ContactUserMessagesUsername } from "./contactUserMessagesUsername";

export const ContactUserMessagesBody = props => {
  return (
    <div className="contactuser__leftside__body" id="adminMessage">
      <ContactUserMessagesUsername userName={props.userName} />
      {props.chat.map((message, index) => {
        if (message.side === "admin") {
          return (
            <ContactUserMessagesBodyAdmin key={index} txt={message.text} />
          );
        } else if (message.side === "user") {
          return <ContactUserMessagesBodyUser key={index} txt={message.text} />;
        }
      })}
    </div>
  );
};
