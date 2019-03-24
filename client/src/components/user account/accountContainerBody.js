import React from "react";
import { AccountContainerBodyDeposit } from "./accountContainerBodyDeposit";
import { AccountContainerBodyHistory } from "./accountContainerBodyHistory";
import { AccountContainerBodyPersonal } from "./accountContainerBodyPersonal";

export const AccountContainerBody = props => {
  return (
    <div className="account__container__body">
      <AccountContainerBodyDeposit baanceStater={props.baanceStater} />
      <AccountContainerBodyHistory
        historyStater={props.historyStater}
        history={props.history}
      />
      <AccountContainerBodyPersonal
        userStater={props.userStater}
        user={props.user}
      />
    </div>
  );
};
