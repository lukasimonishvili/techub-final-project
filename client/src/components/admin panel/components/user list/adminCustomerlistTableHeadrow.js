import React from "react";
import { AdminCustomerlistTableHeader } from "./adminCustomerlistTableHeader";

export const AdminCustomerlistTableHeadrow = () => {
  return (
    <tr className="customerlist__table__headrow">
      <AdminCustomerlistTableHeader collumnName="ID" />
      <AdminCustomerlistTableHeader collumnName="Name" />
      <AdminCustomerlistTableHeader collumnName="lastname" />
      <AdminCustomerlistTableHeader collumnName="email" />
      <AdminCustomerlistTableHeader collumnName="birthdate" />
    </tr>
  );
};
