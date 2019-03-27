import React from "react";
import { Cart } from "../../../cart/cart";

export const AdminCustomerlistCart = props => {
  return (
    <div className="customerlist__cart">
      <Cart cart={props.cart} />
    </div>
  );
};
