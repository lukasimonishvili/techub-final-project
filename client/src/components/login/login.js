import React from "react";

import { LoginUsername } from "./loginUsername";
import { LoginPassword } from "./loginPassword";
import { LoginSignin } from "./loginSignin";
import { LoginRegister } from "./loginRegister";

export const Login = () => {
  return (
    <div className="login fl fl_jus_bet">
      <LoginUsername />
      <LoginPassword />
      <LoginSignin />
      <LoginRegister />
    </div>
  );
};
