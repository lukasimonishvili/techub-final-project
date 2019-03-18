import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Sidebar } from "./components/sidebar/sidebar";
import { Product } from "./components/product/product";
import { Feedback } from "./components/feedback/feedback";
import { Comment } from "./components/comment/comment";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Product />
        <Comment />
        <Feedback />
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <CartContainer /> */}
      </>
    );
  }
}

export default App;
