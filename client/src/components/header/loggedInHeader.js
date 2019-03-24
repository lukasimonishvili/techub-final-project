import React from "react";
import { LoggedInWrapper } from "./loggedInWrapper";

export const LoggedInHeader = props => {
  return (
    <header className="header">
      <LoggedInWrapper balance={props.balance} />
    </header>
  );
};
