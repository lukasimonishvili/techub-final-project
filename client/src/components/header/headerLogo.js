import React from "react";
import { HeaderLogoImg } from "./headerLogoImg";
import {Link} from "@reach/router"
export const HeaderLogo = () => {
  return (
    <Link to="/" className="header__logo">
      <HeaderLogoImg />
    </Link>
  );
};
