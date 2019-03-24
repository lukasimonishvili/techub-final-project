import React from "react";
import { AccountContainertBodyHistoryItems } from "./accountContainerBodyHistoryItems";

export const AccountContainerBodyHistoryList = props => {
  return (
    <ul className="account__container__body--hislist">
      {props.history.map((item, index) => {
        return (
          <AccountContainertBodyHistoryItems
            key={index}
            productname={item.title}
            amount={item.quantity}
          />
        );
      })}
    </ul>
  );
};
