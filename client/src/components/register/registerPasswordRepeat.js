import React from "react";

export const RegisterPasswordRepeat = () => {
  return (
    <input
      type="password"
      placeholder="repeat password"
      className="register__password"
      id="rePassword"
      onClick={e => {
        e.target.style.borderColor = "transparent";
      }}
    />
  );
};
