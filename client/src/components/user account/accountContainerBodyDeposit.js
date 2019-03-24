import React from "react";
import { AccountContainerBodyDepositMakedeposit } from "./accountContainerBodyDepositMakedeposit";
import { AccountContainerBodyDepositInput } from "./accountContainerBodyDepositInput";

export const AccountContainerBodyDeposit = props => {
  return (
    <div className="account__container__body--deposit" id="deposit">
      <AccountContainerBodyDepositInput />
      <AccountContainerBodyDepositMakedeposit
        baanceStater={props.baanceStater}
      />
    </div>
  );
};
