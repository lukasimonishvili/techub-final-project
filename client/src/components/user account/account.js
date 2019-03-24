import React from "react";
import { AccountContainer } from "./accountContainer";

export const Account = props => {
  return (
    <div className="account">
      <AccountContainer
        history={props.history}
        baanceStater={props.baanceStater}
        historyStater={props.historyStater}
        userStater={props.userStater}
        user={props.user}
      />
    </div>
  );
};
