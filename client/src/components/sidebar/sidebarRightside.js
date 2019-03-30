import React from "react";

export const SidebarRightside = () => {
  return (
    <div
      className="sidebar__rightside"
      id="sidebarRightside"
      onClick={() => {
        const sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none";
      }}
    />
  );
};
