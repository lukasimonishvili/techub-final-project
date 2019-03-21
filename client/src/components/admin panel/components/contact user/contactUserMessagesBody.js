import React from "react";
import { ContactUserMessagesBodyAdmin } from "./contactUserMessagesBodyAdmin";
import { ContactUserMessagesBodyUser } from "./contactUserMessagesBodyUser";
import { ContactUserMessagesUsername } from "./contactUserMessagesUsername";

export const ContactUserMessagesBody = () => {
  return (
    <div className="contactuser__leftside__body fl fl_dir_col">
      <ContactUserMessagesUsername />
      <ContactUserMessagesBodyAdmin />
      <ContactUserMessagesBodyUser />
    </div>
  );
};
