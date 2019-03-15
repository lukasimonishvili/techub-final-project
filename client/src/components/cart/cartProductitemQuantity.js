import React from "react";

import { QuantityNumber } from "./quantityNumber";

// import {მუდმივა} from "./ფაილი"

export const CartProductitemQuantity = () => {
    return (
        <span className="cart__productitem__quantity">
            {/* ტექსტი
                ან/და
            <მუდმივა/> */}
            quantity:
            <QuantityNumber />
        </span>
    )
}