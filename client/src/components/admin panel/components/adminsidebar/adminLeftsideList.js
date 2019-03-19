import React from "react";
import { AdminLeftsideItem } from "./adminLeftsideItem";

export const AdminLeftsideList = () => {
  return (
    <ul className="admin__leftside__list">
      <AdminLeftsideItem listItem="Add Items" link="/additem"/>
      <AdminLeftsideItem listItem="User List" link="/userlist"/>
      <AdminLeftsideItem listItem="Item List" link="/"/>
      <AdminLeftsideItem listItem="Comments" link="/"/>
      <AdminLeftsideItem listItem="Contact User" link="/"/>
      <AdminLeftsideItem listItem="Log Out" link="/"/>
    </ul>
  );
};
