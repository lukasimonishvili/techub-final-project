import React from "react";
import Axios from "axios";

export const ContactUserUsersListItem = props => {
  return (
    <li
      className="contactuser__rightside__list--item"
      onClick={e => {
        e.target.style.color = "black";
        Axios.post("/clearAdminNotification", { userId: props.userId });
        props.stater(props.userId, `${props.userName} ${props.lastName}`);
      }}
    >{`${props.userName} ${props.lastName} id: ${props.userId}`}</li>
  );
};
