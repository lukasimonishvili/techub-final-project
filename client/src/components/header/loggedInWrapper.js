import React from "react";
import { LoggedInHeaderNav } from "./loggedInHeaderNav";

export const LoggedInWrapper = props => {
  return (
    <div className="wrapper">
      <LoggedInHeaderNav balance={props.balance} />
    </div>
  );
};
