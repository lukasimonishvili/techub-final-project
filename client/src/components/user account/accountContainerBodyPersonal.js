import React from "react";
import { AccountContainerBodyPersonalChangename } from "./accountContainerBodyPersonalChangename";
import { AccountContainerBodyPersonalChangelastname } from "./accountContainerBodyPersonalChangelastname";
import { AccountContainerBodyPersonalChangepass } from "./accountContainerBodyPersonalChangepass";
import { AccountContainerBodyPersonalChangepassrepeat } from "./accountContainerBodyPersonalChangepassrepeat";
import { AccountContainerBodyPersonalEntercurrentpass } from "./accountContainerBodyPersonalEntercurrentpass";
import { AccountContainerBodyPersonalSavechanges } from "./accountContainerBodyPersonalSavechanges";

export const AccountContainerBodyPersonal = props => {
  return (
    <div
      className="account__container__body--personal fl_dir_col"
      id="personal"
    >
      <AccountContainerBodyPersonalChangename userName={props.user.name} />
      <AccountContainerBodyPersonalChangelastname
        lastName={props.user.lastName}
      />
      <AccountContainerBodyPersonalChangepass />
      <AccountContainerBodyPersonalChangepassrepeat />
      <AccountContainerBodyPersonalEntercurrentpass />
      <AccountContainerBodyPersonalSavechanges userStater={props.userStater} />
    </div>
  );
};
