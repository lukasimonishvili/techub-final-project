import React from "react";
import { AccountContainerBodyHistoryList } from "./accountContainerBodyHistoryList";
import { AccountContainerBodyHistoryClear } from "./accountContainerBodyHistoryClear";

export const AccountContainerBodyHistory = () => {
  return <div className="account__container__body--history" id="history">
  <AccountContainerBodyHistoryClear/>
  <AccountContainerBodyHistoryList/>
  </div>;
};
