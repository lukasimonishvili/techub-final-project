import React from "react";

export const AccountContainerNavPersonal = () => {
  return (
    <li
      className="account__container__nav--personal" id="navPersonal"
      onClick={() => {
        let deposit = document.getElementById("deposit");
        let history = document.getElementById("history");
        let personal = document.getElementById("personal");let navDeposit = document.getElementById("navDeposit");
        let navHistory = document.getElementById("navHistory");
        let navPersonal = document.getElementById("navPersonal");
        navDeposit.style.background = "#33333a4b";
        navHistory.style.background = "#33333a4b";
        navPersonal.style.background = "rgb(51, 51, 58)";
        deposit.style.display = "none";
        history.style.display = "none";
        personal.style.display = "flex";
      }}
    >
      Personal Info
    </li>
  );
};
