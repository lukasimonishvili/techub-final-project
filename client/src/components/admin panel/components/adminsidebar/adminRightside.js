import React from "react";
import { Additem } from "../add items/additem";
import { Router } from "@reach/router";
import { AdminCustomerlist } from "../user list/adminCustomerlist";
import { ContactUser } from "../contact user/contactUser";
import { ProductCat } from "../ProductCat list/ProductCat";
import { Feedbacklist } from "../Feedbacklist/feedbacklist";
import { AdminBurgerImg } from "./adminBurgerImg";
import { Soldout } from "../sold out/soldout";
import { ERROR404 } from "../../../404/404";

export const AdminRightside = () => {
  return (
    <>
      <AdminBurgerImg />
      <Router className="admin__rightside">
        <ERROR404 default />
        <Additem path="/additem" />
        <AdminCustomerlist path="/userlist" />
        <ContactUser path="/contactuser" />
        <ProductCat path="/productlist" />
        <Feedbacklist path="/feedback" />
        <Soldout path="/soldout" />
      </Router>
    </>
  );
};
