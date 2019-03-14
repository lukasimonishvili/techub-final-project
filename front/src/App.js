import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import {Login} from "./components/login/login";
import {CartContainer} from "./components/cart/cartContainer";


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
        <CartContainer />
      </>
    );
  }
}

export default App;
