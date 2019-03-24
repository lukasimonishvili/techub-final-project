import React from "react";

export const AccountContainerBodyPersonalChangename = props => {
  return (
    <input
      className="account__container__body--personname"
      placeholder="Enter new name"
      defaultValue={props.userName}
      id="name"
    />
  );
};
