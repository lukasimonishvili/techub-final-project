import React from "react";

import { QuantityNumber } from "./quantityNumber";

export const CartProductitemQuantity = props => {
  return (
    <span className="cart__productitem__quantity">
      quantity: <QuantityNumber amount={props.amount} />
    </span>
  );
};
