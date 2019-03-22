import React from "react";

import { CartProductitemImage } from "./cartProductitemImage";
import { CartProductitemName } from "./cartProductitemName";
import { CartProductitemQuantity } from "./cartProductitemQuantity";
import { CartProductitemCost } from "./cartProductitemCost";
import { CartProductitemDelete } from "./cartProductitemDelete";

export const CartProductitem = props => {
  return (
    <li className="cart__productitem fl fl_jus_bet fl_ali_cen">
      <CartProductitemImage photo={props.photo} />
      <CartProductitemName productName={props.productName} />
      <CartProductitemQuantity amount={props.amount} />
      <CartProductitemCost price={props.price} />
      <CartProductitemDelete
        stater={props.stater}
        productId={props.productId}
      />
    </li>
  );
};
