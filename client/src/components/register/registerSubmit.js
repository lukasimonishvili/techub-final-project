import React from "react";
// import Axios from "axios";
// import swal from "sweetalert";

export const RegisterSubmit = props => {
  return (
    <button
      className="register__submit"
      onClick={()=>{
        props.register()
      }}
    >
      Register
    </button>
  );
};
