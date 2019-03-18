import React from "react";
import { HeaderSidebarImg } from "./headerSidebarImg";


export const HeaderSidebar = () => {
  return (
    <li className="header__sidebar" onClick={()=>{
      const sidebar = document.getElementById("sidebar");
      const rightside = document.getElementById("sidebarRightside");
      sidebar.style.display = "flex";
      rightside.style.display = "flex";
      
      
    }}>
      <HeaderSidebarImg />
    </li>
  );
};
