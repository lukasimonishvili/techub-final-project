import React from "react";

export const RegisterEmail = () => {
  return (
    <input
      id="eMail"
      type="mail"
      placeholder="Email"
      className="register__email"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
