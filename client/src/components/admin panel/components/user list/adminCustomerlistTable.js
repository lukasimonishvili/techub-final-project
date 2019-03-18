import React from "react"

import { AdminCustomerlistTableHeadrow } from "./adminCustomerlistTableHeadrow";
import { AdminCustomerlistTableRow } from "./adminCustomerlistTableRow";

export const AdminCustomerlistTable = () => { 
    return     (
    <table className="admin__customerlist__table" >
        <AdminCustomerlistTableHeadrow />
        <AdminCustomerlistTableRow />
    </table>)

}