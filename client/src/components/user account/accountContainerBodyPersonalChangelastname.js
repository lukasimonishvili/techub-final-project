import React from "react";

export const AccountContainerBodyPersonalChangelastname = props => {
  return (
    <input
      className="account__container__body--personlastname"
      placeholder="Enter new lastname"
      defaultValue={props.lastName}
      id="lastName"
    />
  );
};
