import React from "react"
import { AdminCustomerlistTableDataA } from "./adminCustomerlistTableDataA";
import { AdminCustomerlistTableData } from "./adminCustomerlistTableData";



export const AdminCustomerlistTableRow = () => { 
    return     (
    <tr className="admin__customerlist__table--row" >
        <AdminCustomerlistTableDataA collumnDataA="ID"/>
        <AdminCustomerlistTableData collumnData="Name"/>
        <AdminCustomerlistTableData collumnData="lastname"/>
        <AdminCustomerlistTableDataA collumnDataA="email"/>
        <AdminCustomerlistTableData collumnData="birthdate"/>
        <AdminCustomerlistTableDataA collumnDataA="Cart"/>
    </tr>)

}