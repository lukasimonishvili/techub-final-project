import React from "react";
import gamburga from '../../../../img/gamburga.png';
export const AdminBurgerImg = () => {
  return (
    <div className="admin__sidebar__burger" id="adminBurger" onClick={(e)=>{
        let adminLeftside = document.getElementById("adminLeftside");

        adminLeftside.classList.toggle("block");
    }}>
      <img src={gamburga} alt='hamburgermenu' />
    </div>
  );
};
