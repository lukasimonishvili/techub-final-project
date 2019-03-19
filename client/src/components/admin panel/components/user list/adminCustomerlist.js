import React from "react"
import { AdminCustomerlistTitle } from "./adminCustomerlistTitle";
import { AdminCustomerlistSearch } from "./adminCustomerlistSearch";
import { AdminCustomerlistTable } from "./adminCustomerlistTable";
import { AdminCustomerlistSearchBtn } from "./adminCustomerlistSearchBtn";

export const AdminCustomerlist = () => { 
    return     (
    <div className="customerlist">
        <AdminCustomerlistTitle />
        <AdminCustomerlistSearch />
        <AdminCustomerlistSearchBtn/>
        <AdminCustomerlistTable />
    </div>)

}