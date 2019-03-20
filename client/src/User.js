import React from "react";
import { Router } from "@reach/router";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Product } from "./components/product/product";
import { Footer } from "./components/footer/footer";
import { ProductOnPage } from "./components/product item/productOnPage";

export class User extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <ProductOnPage />
        <Router>
          <CartContainer path="/mycart" />
          <Login path="/login" />
          <Register path="/register" />
        </Router>
        <Product path="product/:productId" />
        <Footer />
      </>
    );
  }
}
