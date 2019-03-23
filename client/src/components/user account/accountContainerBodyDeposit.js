import React from "react";
import { AccountContainerBodyDepositMakedeposit } from "./accountContainerBodyDepositMakedeposit";
import { AccountContainerBodyDepositInput } from "./accountContainerBodyDepositInput";

export const AccountContainerBodyDeposit = () => {
  return (
    <div className="account__container__body--deposit" id="deposit">
      <AccountContainerBodyDepositInput />
      <AccountContainerBodyDepositMakedeposit />
    </div>
  );
};
