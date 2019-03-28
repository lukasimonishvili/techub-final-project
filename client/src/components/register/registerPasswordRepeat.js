import React from "react";

export const RegisterPasswordRepeat = () => {
  return (
    <input
      type="password"
      placeholder="repeat password"
      className="register__password"
      id="rePassword"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
