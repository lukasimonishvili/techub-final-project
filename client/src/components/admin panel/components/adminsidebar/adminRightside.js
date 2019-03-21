import React from "react";
import { Additem } from "../add items/additem";
import {Router} from "@reach/router"
import { AdminCustomerlist } from "../user list/adminCustomerlist";
import { ContactUser } from "../contact user/contactUser";
import { ProductCat } from "../ProductCat list/ProductCat";


export const AdminRightside = () => {
  return (
    <Router className="admin__rightside">
      <Additem path="/additem"/>
      <AdminCustomerlist path="/userlist"/>
      <ContactUser path="/contactuser"/>
      <ProductCat path="/productlist"/>
    </Router>
  );
};
