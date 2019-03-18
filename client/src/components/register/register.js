import React from "react";
import { RegisterEmail } from "./registerEmail";
import { RegisterPassword } from "./registerPassword";
import { RegisterPasswordRepeat } from "./registerPasswordRepeat";
import { RegisterBirthdate } from "./regosterBirthdate";
import { RegisterSubmit } from "./registerSubmit";
import { RegisterName } from "./registerName";
import { RegisterLastName } from "./registerLastname";

export const Register = () => {
  return (
    <div className="register login">
      <RegisterName/>
      <RegisterLastName/>
      <RegisterEmail />
      <RegisterPassword />
      <RegisterPasswordRepeat />
      <RegisterBirthdate />
      <RegisterSubmit />
    </div>
  );
};
