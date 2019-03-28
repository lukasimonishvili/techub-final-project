import React from "react";

export const RegisterName = () => {
  return (
    <input
      type="text"
      placeholder="Name"
      id="name"
      className="register__username"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
