import React from "react";

import {LoginUsername} from "./loginUsername"
import {LoginPassword} from "./loginPassword"
import {LoginSignin} from "./loginSignin"
import { LoginRegister } from "./loginRegister";


export const Login = () => {
    return (
        <div className="login">
            <LoginUsername/>
            <LoginPassword/>
            <LoginSignin/>
            <LoginRegister/>
        </div>
    )
}