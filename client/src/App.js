import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Sidebar } from "./components/sidebar/sidebar";
import { Product } from "./components/product/product";
import { Wrapper } from "./components/footer/wrapper";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Wrapper />
        {/* <Product /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <CartContainer /> */}
      </>
    );
  }
}

export default App;
