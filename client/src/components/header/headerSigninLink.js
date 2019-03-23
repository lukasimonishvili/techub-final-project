import React from "react";
import { Link } from "@reach/router";
export const HeaderSigninLink = () => {
  return (
    <Link
      to="/login"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="header__signin"
    >
      Log In
    </Link>
  );
};
