import React from "react";

export const LoginUsername = () => {
  return (
    <input
      className="login__username"
      type="mail"
      placeholder="E-mail"
      id="eMail"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
