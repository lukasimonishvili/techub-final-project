import React from "react";
import { SidebarHeader } from "./sidebarHeader";
import { SidebarProductlist } from "./sidebarProductlist";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarProductlist />
    </div>
  );
};
