import React from "react"
import { AdminCustomerlistTableDataA } from "./adminCustomerlistTableDataA";
import { AdminCustomerlistTableData } from "./adminCustomerlistTableData";



export const AdminCustomerlistTableRow = () => { 
    return     (
    <tr className="customerlist__table__row" >
        <AdminCustomerlistTableDataA collumnDataA="ID"/>
        <AdminCustomerlistTableData collumnData="Name"/>
        <AdminCustomerlistTableData collumnData="lastname"/>
        <AdminCustomerlistTableDataA collumnDataA="email"/>
        <AdminCustomerlistTableData collumnData="birthdate"/>
        <AdminCustomerlistTableDataA collumnDataA="Cart"/>
    </tr>)

}