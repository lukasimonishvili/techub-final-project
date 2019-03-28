import React from "react";

export const LoginSignin = props => {
  return (
    <button
      className="login__signin"
      onClick={() => {
        props.login();
      }}
    >
      Sign in
    </button>
  );
};
