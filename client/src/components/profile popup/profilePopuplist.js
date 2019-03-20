import React from "react";
import { ProfilePopupBalance } from "./profilePopupItem";
import { ProfilePopupLogout } from "./profilePopupLogout";
import { ProfilePopupAccount } from "./profilePopupAccount";

export const ProfilePopupList = () => {
  return (
    <nav className="profilepopup__list">
      <ProfilePopupBalance name="balance" />
      <ProfilePopupAccount />
      <ProfilePopupLogout />
    </nav>
  );
};
