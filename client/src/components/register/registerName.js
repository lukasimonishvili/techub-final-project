import React from "react";

export const RegisterName = () => {
  return (
    <input
      type="text"
      placeholder="Name"
      id="name"
      className="register__username"
      onClick={e => {
        e.target.style.borderColor = "transparent";
      }}
    />
  );
};
