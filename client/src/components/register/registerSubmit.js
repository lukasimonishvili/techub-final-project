import React from "react";

export const RegisterSubmit = props => {
  return (
    <button
      className="register__submit"
      onClick={() => {
        props.register();
      }}
    >
      Register
    </button>
  );
};
