import React from "react";

export const SidebarProducItem3 = props => {
  return (
    <li
      className="sidebar__productitem"
      onClick={() => {
        let sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none";
        props.catStater(props.cat);
      }}
    >
      {props.cat}
    </li>
  );
};
