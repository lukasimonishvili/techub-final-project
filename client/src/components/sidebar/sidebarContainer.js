import React from "react";
import { SidebarHeader } from "./sidebarHeader";
import { SidebarProductlist } from "./sidebarProductlist";
export const SidebarContainer = props => {
  return (
    <div className="sidebar__container">
      <SidebarHeader userName={props.userName} />
      <SidebarProductlist />
    </div>
  );
};
