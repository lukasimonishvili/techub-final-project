import React from "react";

export const RegisterPassword = () => {
  return (
    <input
      type="password"
      placeholder="password"
      className="register__password"
      id="password"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
