import React from "react";

export const RegisterEmail = () => {
  return (
    <input
      id="eMail"
      type="text"
      placeholder="Email"
      className="register__email"
      onClick={e => {
        e.target.style.borderColor = "transparent";
      }}
    />
  );
};
