import React from "react";

import { SidebarContainer } from "./sidebarContainer";
import { SidebarRightside } from "./sidebarRightside";

export const Sidebar = () => {
  return (
    <div className="sidebar fl" id="sidebar">
      <SidebarContainer />
      <SidebarRightside />
    </div>
  );
};
