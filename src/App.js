import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";

//  here is test component for herocu hosting
class Test extends React.Component {}

// that`s it :)

import { Register } from "./components/register/register";
import { Sidebar } from "./components/sidebar/sidebar";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Login />
        <Register />
        <CartContainer />
      </>
    );
  }
}

export default App;
