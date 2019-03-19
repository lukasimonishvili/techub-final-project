import React from "react";

import { AdminCustomerlistTableHeadrow } from "./adminCustomerlistTableHeadrow";
import { AdminCustomerlistTableRow } from "./adminCustomerlistTableRow";

export const AdminCustomerlistTable = () => {
  return (
    <table className="customerlist__table">
      <tbody>
        <AdminCustomerlistTableHeadrow />
        <AdminCustomerlistTableRow />
      </tbody>
    </table>
  );
};
