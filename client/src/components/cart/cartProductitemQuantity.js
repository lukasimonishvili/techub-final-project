import React from "react";

import { QuantityNumber } from "./quantityNumber";


export const CartProductitemQuantity = () => {
    return (
        <span className="cart__productitem__quantity" >
            quantity:
            <QuantityNumber />
        </span>
    )
}