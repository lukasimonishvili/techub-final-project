import React from "react";
import { AccountContainerNavDeposit } from "./accountContainerNavDeposit";
import { AccountContainerNavHistory } from "./accountContainerNavHistory";
import { AccountContainerNavPersonal } from "./accountContainerNavPersonal";

export const AccountContainerNav = () => {
  return (
    <ul className="account__container__nav fl">
      <AccountContainerNavDeposit />
      <AccountContainerNavHistory />
      <AccountContainerNavPersonal />
    </ul>
  );
};
