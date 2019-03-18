import React from "react"
import { AdminLeftsideHeader } from "./adminLeftsideHeader";
import { AdminLeftsideList } from "./adminLeftsideList";

export const AdminLeftside = () => { 
    return     (<div className="admin__leftside">
    <AdminLeftsideHeader/>
    <AdminLeftsideList/>
    </div>)
