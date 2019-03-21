import React from "react";
import { ContactUserUsersList } from "./contactUserUsersList";
import { ContactUserUsersSearch } from "./contactUserUsersSearch";

export const ContactUserUsers = () => {
  return (
    <div className="contactuser__rightside">
    <ContactUserUsersSearch/>
      <ContactUserUsersList />
    </div>
  );
};
