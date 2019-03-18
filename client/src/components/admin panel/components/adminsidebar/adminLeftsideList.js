import React from "react";
import { AdminLeftsideItem } from "./adminLeftsideItem";

export const AdminLeftsideList = () => {
  return (
    <ul className="admin__leftside__list">
      <AdminLeftsideItem listItem="Add Items" />
      <AdminLeftsideItem listItem="User List" />
      <AdminLeftsideItem listItem="Item List" />
      <AdminLeftsideItem listItem="Comments" />
      <AdminLeftsideItem listItem="Contact User" />
      <AdminLeftsideItem listItem="Log Out" />
    </ul>
  );
};
