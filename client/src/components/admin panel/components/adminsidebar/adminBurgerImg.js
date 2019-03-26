import React from "react";
export const AdminBurgerImg = () => {
  return (
    <div
      className="admin__sidebar__burger"
      id="adminBurger"
      onClick={e => {
        let adminLeftside = document.getElementById("adminLeftside");

        adminLeftside.classList.toggle("block");
      }}
    >
      <img src="https://static.thenounproject.com/png/153-200.png" />
    </div>
  );
};
