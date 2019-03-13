import React from "react";
import { RegisterUsername } from "./registerUsername";
import { RegisterEmail } from "./registerEmail";
import { RegisterPassword } from "./registerPassword";
import { RegisterPasswordRepeat } from "./registerPasswordRepeat";
import { RegisterBirthdate } from "./regosterBirthdate";
import { RegisterSubmit } from "./registerSubmit";

export const Register = () => {
  return (
    <div class="register login">
      <RegisterUsername />
      <RegisterEmail />
      <RegisterPassword />
      <RegisterPasswordRepeat />
      <RegisterBirthdate />
      <RegisterSubmit/>
    </div>
  );
};
