import React from "react";
import { HeaderSigninLink } from "./headerSigninLink";
import {Link} from "@reach/router";
export const HeaderSignin = () => {
  return (
    <Link to="/login">
      <HeaderSigninLink />
    </Link>
  );
};
