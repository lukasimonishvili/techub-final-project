import React from "react";
import { CartHeader } from "./cartHeader";
import { Cart } from "./cart";
import { CartBuyitnow } from "./cartBuyitnow";

export const CartContainer = props => {
  // console.log(props.cart);
  return (
    <div className="cart__container">
      <CartHeader />
      <Cart />
      <CartBuyitnow />
    </div>
  );
};
