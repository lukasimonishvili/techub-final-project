import React from "react";
import {Link} from "@reach/router";
export const HeaderSigninLink = () => {
  return (
    <Link to="/login" href="#" className="header__signin">
      Log In
    </Link>
  );
};
