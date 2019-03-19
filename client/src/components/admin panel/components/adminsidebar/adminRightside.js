import React from "react";
import { Additem } from "../add items/additem";
import {Router} from "@reach/router"
import { AdminCustomerlist } from "../user list/adminCustomerlist";


export const AdminRightside = () => {
  return (
    <Router className="admin__rightside">
      <Additem path="/additem"/>
      <AdminCustomerlist path="/userlist"/>
    </Router>
  );
};
