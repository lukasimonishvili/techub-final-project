import React from "react";
import Axios from "axios";
import swal from "sweetalert";
import { RegisterEmail } from "./registerEmail";
import { RegisterPassword } from "./registerPassword";
import { RegisterPasswordRepeat } from "./registerPasswordRepeat";
import { RegisterBirthdate } from "./regosterBirthdate";
import { RegisterSubmit } from "./registerSubmit";
import { RegisterName } from "./registerName";
import { RegisterLastName } from "./registerLastname";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
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
      if (res.data.message == "registration successfully") {
        swal(res.data.message, { icon: "success" });
      } else {
        swal(res.data.message, { icon: "error" });
      }
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
  }

  componentDidMount() {
    window.onkeyup = e => {
      if (e.keyCode == 13) {
        this.register();
      }
    };
  }

  render() {
    return (
      <div className="register login">
        <RegisterName />
        <RegisterLastName />
        <RegisterEmail />
        <RegisterPassword />
        <RegisterPasswordRepeat />
        <RegisterBirthdate />
        <RegisterSubmit register={this.register} />
      </div>
    );
  }
}
