import React from "react";

export const RegisterLastName = () => {
  return (
    <input
      type="text"
      id="lastName"
      placeholder="Last name"
      className="register__username"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
