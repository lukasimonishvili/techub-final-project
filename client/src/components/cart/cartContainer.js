import React from "react";

import { CartHeader } from "./cartHeader";
import { Cart } from "./cart";
import { CartBuyitnow } from "./cartBuyitnow";

export const CartContainer = () => {
    return (
        <div className="wrapper cart__container">
            <CartHeader />
            <Cart />
            <CartBuyitnow />
        </div>
    )
}