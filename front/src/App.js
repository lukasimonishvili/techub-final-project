import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import {Login} from "./components/login/login";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Login />
      </>
    );
  }
}

export default App;
