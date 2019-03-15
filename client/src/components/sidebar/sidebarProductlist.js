import React from "react";
import { SidebarProducItem1 } from "./sidebarProductitem1";
import { SidebarProducItem2 } from "./sidebarProductItem2";
import { SidebarProducItem3 } from "./sidebarProductItem3";

export const SidebarProductlist = () => {
  return (
    <ul className="sidebar__productlist">
      <SidebarProducItem1 />
      <SidebarProducItem2 />
      <SidebarProducItem3 />
    </ul>
  );
};
