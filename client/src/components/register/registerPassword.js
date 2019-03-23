import React from "react";

export const RegisterPassword = () => {
  return (
    <input
      type="password"
      placeholder="password"
      className="register__password"
      id="password"
      onClick={e => {
        e.target.style.borderColor = "transparent";
      }}
    />
  );
};
