import React from "react";
import { AdminLeftside } from "./adminLeftside";
import { AdminRightside } from "./adminRightside";

export const Admin = () => {
  return (
    <div className="admin">
      <AdminLeftside />
      <AdminRightside/>
    </div>
  );
};
