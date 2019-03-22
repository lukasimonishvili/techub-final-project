import React from "react";
import { AccountContainerNav } from "./accountContainerNav";
import { AccountContainerBody } from "./accountContainerBody";

export const AccountContainer = () => {
  return (
    <div className="account__container">
      <AccountContainerNav />
      <AccountContainerBody />
    </div>
  );
};
