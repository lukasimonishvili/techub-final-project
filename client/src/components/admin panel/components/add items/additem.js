import React from "react";
import { AdditemUpload } from "./additemUpload";
import { AdditemName } from "./additemName";
import { AdditemCategory } from "./additemCategory";
import { AdditemDescription } from "./additemDescription";
import { AdditemQuantity } from "./additemQuantity";
import { AdditemCost } from "./additemCost";
import { AdditemSend } from "./additemSend";

export const Additem = () => {
  return (
    <div className="additem">
      <AdditemUpload />
      <AdditemName />
      <AdditemCategory />
      <AdditemDescription />
      <AdditemQuantity />
      <AdditemCost/>
      <AdditemSend/>
    </div>
  );
};
