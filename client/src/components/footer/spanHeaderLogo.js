import React from "react";
import { HeaderLogo } from "./headerLogo";
import {Link} from "@reach/router"

export const SpanHeaderLogo = () => {
  return (
    <Link to="/">
      <HeaderLogo />
    </Link>
  );
};
