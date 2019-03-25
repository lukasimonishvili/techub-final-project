import React from "react";
import Axios from "axios";

export const RegisterSubmit = () => {
  return (
    <button
      className="register__submit"
      onClick={() => {
        const name = document.getElementById("name");
        const lastName = document.getElementById("lastName");
        const eMail = document.getElementById("eMail");
        const password = document.getElementById("password");
        const rePassword = document.getElementById("rePassword");
        const date = document.getElementById("date");

        let sendData = {
          name: name.value,
          lastName: lastName.value,
          eMail: eMail.value,
          password: password.value,
          repassword: rePassword.value,
          birthDay: date.value.toString()
        };
        Axios.post("/register", sendData).then(res => {
          alert(res.data.message);
          switch (res.data.message) {
            case "Email is invalid or already taken":
              eMail.style.borderColor = "red";
              break;
            case "Password should contain min 6 symbols":
              password.style.borderColor = "red";
              rePassword.style.borderColor = "red";
              break;
            case "Those passwords didn`t match. Try again":
              password.style.borderColor = "red";
              rePassword.style.borderColor = "red";
              break;
            case "registration successfully":
              eMail.value = "";
              lastName.value = "";
              name.value = "";
              password.value = "";
              rePassword.value = "";
              break;
          }
        });
      }}
    >
      Register
    </button>
  );
};
