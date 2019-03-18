import React from "react";
import { Additem } from "../add items/additem";
import {Router} from "@reach/router"


export const AdminRightside = () => {
  return (
    <Router className="admin__rightside">
      <Additem path="/additem"/>
    </Router>
  );
};
