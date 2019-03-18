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
import { Chat } from "./components/contactus/chat";
import { Footer } from "./components/footer/footer";
import { Additem } from "./components/admin panel/components/add items/additem";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {/* <Admin/> */}
        <Additem/>
        {/* <Product /> */}
        {/* <Comment /> */}
        {/* <Feedback /> */}
        {/* <Chat /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <CartContainer /> */}
        <Footer />
      </>
    );
  }
}

export default App;
