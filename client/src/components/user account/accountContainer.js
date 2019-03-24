import React from "react";
import { AccountContainerNav } from "./accountContainerNav";
import { AccountContainerBody } from "./accountContainerBody";

export const AccountContainer = props => {
  return (
    <div className="account__container">
      <AccountContainerNav />
      <AccountContainerBody
        history={props.history}
        baanceStater={props.baanceStater}
        historyStater={props.historyStater}
        userStater={props.userStater}
        user={props.user}
      />
    </div>
  );
};
