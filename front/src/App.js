import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import {Login} from "./components/login/login";

import { Register } from "./components/register/register";
import { Sidebar } from "./components/sidebar/sidebar";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Login />
        <Register />
        <Sidebar />
      </>
    );
  }
}

export default App;
