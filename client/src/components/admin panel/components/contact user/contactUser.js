import React from "react";
import { ContactUserMessages } from "./contactUserMessages";
import { ContactUserUsers } from "./contactUserUsers";

export const ContactUser = () => {
  return (
    <div className="contactuser fl">
    <ContactUserMessages/>
    <ContactUserUsers/>
    </div>
  );
};
