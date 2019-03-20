import React from "react";
import { Router } from "@reach/router";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Product } from "./components/product/product";
import { Chat } from "./components/contactus/chat";
import { Footer } from "./components/footer/footer";
import { Message } from "./components/message icon/message";

export class User extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Chat />
        <Router>
          <CartContainer path="/mycart" />
          <Login path="/login" />
          <Register path="/register" />
          <Product path="product/:productId" />
        </Router>
        <Message />
        <Footer />
      </>
    );
  }
}
