import React from "react";

export const ProfilePopupLogout = () => {
  return (
    <button
      className="profilepopup__list__logout"
      onClick={() => {
        let removeCookie = cname => {
          var d = new Date();
          d.setTime(d.getTime() + 0 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=;" + expires + ";path=/";
        };
        let setCookie = (cname, cvalue, exdays) => {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        removeCookie("c3a4d");
        setCookie("c3a4d", null, 3650);
        alert(`aba kargad`);
        window.location.replace("/");
      }}
    >
      Log Out
    </button>
  );
};
