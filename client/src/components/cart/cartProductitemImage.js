import React from "react";

export const CartProductitemImage = props => {
  let picture = require(`../../img/uploads/${props.photo}`);
  return <img className="cart__productitem__image" alt="" src={picture} />;
};
