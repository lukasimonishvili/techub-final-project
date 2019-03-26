import React from "react";
import { Link } from "@reach/router";
export const SidebarHeader = () => {
  return (
    <Link to="/">
      <h3 className="sidebar__header">hello user</h3>
    </Link>
  );
};
