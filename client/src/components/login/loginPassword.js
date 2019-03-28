import React from "react";

export const LoginPassword = () => {
  return (
    <input
      className="login__password"
      type="password"
      placeholder="password"
      id="password"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    />
  );
};
