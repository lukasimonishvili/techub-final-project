import React from "react";

import { CartProductitem } from "./cartProductitem";

export const Cart = () => {
    return (
        <ul className="cart">
            <CartProductitem />
            <CartProductitem />
        
        </ul>
    )
}