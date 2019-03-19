import React from "react";
import { HeaderCartImg } from "./headerCartImg";
import { Link } from "@reach/router";
export const HeaderCart = () => {
  return (
    <Link to="/mycart" className="header__cart">
      <HeaderCartImg />
    </Link>
  );
};
