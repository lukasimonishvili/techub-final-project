import React from "react";

export const RegisterLastName = () => {
  return (
    <input
      type="text"
      id="lastName"
      placeholder="Last name"
      className="register__username"
      onClick={e => {
        e.target.style.borderColor = "transparent";
      }}
    />
  );
};
