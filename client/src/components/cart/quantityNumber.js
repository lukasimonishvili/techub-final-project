import React from "react";

export const QuantityNumber = props => {
  return (
    <input
      type="text"
      defaultValue={`MAX : ${props.amount}`}
      placeholder="quantity"
      onClick={e => {
        if (e.target.value === `MAX : ${props.amount}`) {
          e.target.value = "";
          e.target.type = "number";
        }
      }}
    />
  );
};
