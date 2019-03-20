import React from "react";
import { ProfilePopupList } from "./profilePopuplist";

export const ProfileContainer = () => {
  return (
    <div className="profilepopup__container fl" id="profilePopup" onMouseOut={()=>{
      let pop = document.getElementById("profilePopup")
      pop.style.display = "none"
    }}>
      <ProfilePopupList />
    </div>
  );
};
