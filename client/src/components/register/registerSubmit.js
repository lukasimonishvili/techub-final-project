import React from "react";
// import Axios from "axios";
// import swal from "sweetalert";

export const RegisterSubmit = props => {
  return (
    <button
      className="register__submit"
      onFocus={e => {
        e.target.style.border = "1px solid transparent";
        e.target.style.borderBottom = "1px solid gray";
      }}
    >
      Register
    </button>
  );
};
