import React from "react";

export const AccountContainerNavDeposit = () => {
  return (
    <li
      className="account__container__nav--deposit"
      id="navDeposit"
      onClick={() => {
        let deposit = document.getElementById("deposit");
        let history = document.getElementById("history");
        let personal = document.getElementById("personal");
        let navDeposit = document.getElementById("navDeposit");
        let navHistory = document.getElementById("navHistory");
        let navPersonal = document.getElementById("navPersonal");
        deposit.style.display = "flex";
        history.style.display = "none";
        personal.style.display = "none";
        navDeposit.style.background = "rgb(51, 51, 58)";
        navHistory.style.background = "#33333a4b";
        navPersonal.style.background = "#33333a4b";
      }}
    >
      Deposit
    </li>
  );
};
