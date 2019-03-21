import React from "react";
import { ProfileContainer } from "../profile popup/profilePopupContainer";

export const Profile = () => {
  return (
    <button
      className="header__signin" id="profile"
      onMouseOver={() => {
        let pop = document.getElementById("profilePopup");
        pop.style.display = "block";
      }}
      onMouseOut={() => {
        let pop = document.getElementById("profilePopup");
        pop.style.display = "none";
      }}
    >
      Profile
      <ProfileContainer />
    </button>
  );
};
