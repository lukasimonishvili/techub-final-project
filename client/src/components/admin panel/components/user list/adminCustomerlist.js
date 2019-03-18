import React from "react"
import { AdminCustomerlistTitle } from "./adminCustomerlistTitle";
import { AdminCustomerlistSearch } from "./adminCustomerlistSearch";
import { AdminCustomerlistTable } from "./adminCustomerlistTable";

export const AdminCustomerlist = () => { 
    return     (
    <div className="admin__customerlist">
        <AdminCustomerlistTitle />
        <AdminCustomerlistSearch />
        <AdminCustomerlistTable />
    </div>)

}