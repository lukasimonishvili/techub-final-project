import React from "react";
import { ProfilePopupBalance } from "./profilePopupItem";
import { ProfilePopupLogout } from "./profilePopupLogout";
import { ProfilePopupAccount } from "./profilePopupAccount";

export const ProfilePopupList = props => {
  return (
    <nav className="profilepopup__list">
      <ProfilePopupBalance balance={props.balance} />
      <ProfilePopupAccount />
      <ProfilePopupLogout />
    </nav>
  );
};
