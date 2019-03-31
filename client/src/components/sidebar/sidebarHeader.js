import React from "react";
import { Link } from "@reach/router";
export const SidebarHeader = props => {
  return (
    <Link to="/">
      <h3 className="sidebar__header">HELLO {props.userName || "Guest"}</h3>;
    </Link>
  );
};
