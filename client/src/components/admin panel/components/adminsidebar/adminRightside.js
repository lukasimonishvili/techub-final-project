import React from "react";
import { Additem } from "../add items/additem";
import { AdminCustomerlist } from "../user list/adminCustomerlist";

export const AdminRightside = () => {
  return (
    <div className="admin__rightside">
      <Additem />
      <AdminCustomerlist />
    </div>
  );
};
