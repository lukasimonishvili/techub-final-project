import React from "react";

export const AccountContainerNavHistory = () => {
  return (
    <li
      className="account__container__nav--History"
      id="navHistory"
      onClick={() => {
        let deposit = document.getElementById("deposit");
        let history = document.getElementById("history");
        let personal = document.getElementById("personal");
        let navDeposit = document.getElementById("navDeposit");
        let navHistory = document.getElementById("navHistory");
        let navPersonal = document.getElementById("navPersonal");
        navDeposit.style.background = "#33333a4b";
        navHistory.style.background = "rgb(51, 51, 58)";
        navPersonal.style.background = "#33333a4b";
        deposit.style.display = "none";
        history.style.display = "flex";
        personal.style.display = "none";
      }}
    >
      Shopping History
    </li>
  );
};
