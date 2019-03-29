import React from "react";
import { Router } from "@reach/router";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Product } from "./components/product/product";
import { Footer } from "./components/footer/footer";
import { ProductOnPageContainer } from "./components/product item/productOnPageContainer";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.catStater = this.catStater.bind(this);
  }

  state = {
    cat: "ALL"
  };

  catStater(value) {
    this.setState({ cat: value });
  }

  render() {
    return (
      <>
        <Header />
        <Sidebar catStater={this.catStater} />
        <Router>
          <CartContainer path="/mycart" />
          <Login path="/login" />
          <Register path="/register" />
          <Product path="product/:productId" />
          <ProductOnPageContainer cat={this.state.cat} path="/" />
        </Router>
        <Footer />
      </>
    );
  }
}
