import React from "react"

import { AdminCustomerlistTableHeader } from "./adminCustomerlistTableHeader";

export const AdminCustomerlistTableHeadrow = () => { 
    return     (
    <tr className="admin__customerlist__table--headrow" >
        <AdminCustomerlistTableHeader collumnName="ID" />
        <AdminCustomerlistTableHeader collumnName="Name" />
        <AdminCustomerlistTableHeader collumnName="lastname" />
        <AdminCustomerlistTableHeader collumnName="email" />
        <AdminCustomerlistTableHeader collumnName="birthdate" />
        <AdminCustomerlistTableHeader collumnName="Cart" />

    </tr>
    )
}