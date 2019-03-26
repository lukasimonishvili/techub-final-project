import React from "react";
import { SidebarContainer } from "./sidebarContainer";
import { SidebarRightside } from "./sidebarRightside";

export const Sidebar = props => {
  return (
    <div className="sidebar fl" id="sidebar">
      <SidebarContainer catStater={props.catStater} userName={props.userName} />
      <SidebarRightside />
    </div>
  );
};
