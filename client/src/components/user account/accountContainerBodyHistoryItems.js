import React from "react";

export const AccountContainertBodyHistoryItems = props => {
  return (
    <li className="account__container__body--hisitem">
      Name: {props.productname} | quantity: {props.amount}
    </li>
  );
};
