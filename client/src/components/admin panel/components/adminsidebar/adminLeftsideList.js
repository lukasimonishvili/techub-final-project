import React from "react";
import { AdminLeftsideItem } from "./adminLeftsideItem";

export const AdminLeftsideList = () => {
  return (
    <ul className="admin__leftside__list">
      <AdminLeftsideItem listItem="Add Items" link="/additem" />
      <AdminLeftsideItem listItem="User List" link="/userlist" />
      <AdminLeftsideItem listItem="Product List" link="/productlist" />
      <AdminLeftsideItem listItem="Feedback" link="/feedback" />
      <AdminLeftsideItem listItem="Contact User" link="/contactuser" />
      <AdminLeftsideItem listItem="Sold Out" link="/soldout"/>
      <AdminLeftsideItem listItem="Log Out" link="/" />
    </ul>
  );
};
