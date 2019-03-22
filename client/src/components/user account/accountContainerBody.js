import React from "react";
import { AccountContainerBodyDeposit } from "./accountContainerBodyDeposit";
import { AccountContainerBodyHistory } from "./accountContainerBodyHistory";
import { AccountContainerBodyPersonal } from "./accountContainerBodyPersonal";

export const AccountContainerBody = () => {
  return (
    <div className="account__container__body">
      <AccountContainerBodyDeposit />
      <AccountContainerBodyHistory />
      <AccountContainerBodyPersonal />
    </div>
  );
};
