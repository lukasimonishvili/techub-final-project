import React from "react";
import { ContactUserUsersList } from "./contactUserUsersList";
import { ContactUserUsersSearch } from "./contactUserUsersSearch";

export const ContactUserUsers = props => {
  return (
    <div className="contactuser__rightside">
      <ContactUserUsersSearch />
      <ContactUserUsersList stater={props.stater} users={props.users} />
    </div>
  );
};
