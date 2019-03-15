import React from "react";

import { CartProductitemImage } from "./cartProductitemImage";
import { CartProductitemName } from "./cartProductitemName";
import { CartProductitemQuantity } from "./cartProductitemQuantity";
import { CartProductitemCost } from "./cartProductitemCost";
import { CartProductitemDelete } from "./cartProductitemDelete";

// import {მუდმივა} from "./ფაილი"

export const CartProductitem = () => {
    return (
        <li className="cart__productitem fl fl_jus_bet fl_ali_cen">
            {/* ტექსტი
                ან/და
            <მუდმივა/> */}
            <CartProductitemImage />
            <CartProductitemName />
            <CartProductitemQuantity />
            <CartProductitemCost />
            <CartProductitemDelete />
        </li>
    )
}