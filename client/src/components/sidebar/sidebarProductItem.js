import React from "react";
import { Link } from "@reach/router";

export const SidebarProducItem3 = props => {
  return (
    <Link
      to="/"
      className="sidebar__productitem"
      onClick={() => {
        let sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none";
        props.catStater(props.cat);
        window.scrollTo(0, 0);
      }}
    >
      {props.cat}
    </Link>
  );
};
