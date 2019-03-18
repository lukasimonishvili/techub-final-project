import React from "react";
import { SidebarHeader } from "./sidebarHeader";
import { SidebarProductlist } from "./sidebarProductlist";
export const SidebarContainer = () => {
  return (
    <div className="sidebar__container">
      <SidebarHeader />
      <SidebarProductlist />
    </div>
  );
};
