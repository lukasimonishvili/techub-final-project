import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Product } from "./components/product/product";
import { Feedback } from "./components/feedback/feedback";
import { Comment } from "./components/comment/comment";
import { Chat } from "./components/contactus/chat";
import { Footer } from "./components/footer/footer";
import { SearchDropdownItem } from "./components/searchDropdownItem/searchDropdownItem";
import { Admin } from "./components/admin panel/components/adminsidebar/admin";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        {/* <Product /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Comment /> */}
        {/* <Feedback /> */}
        {/* <CartContainer /> */}
        {/* <SearchDropdownItem /> */}
        {/* <Footer /> */}
        <Admin />
        {/* <Chat /> */}
      </>
    );
  }
}

export default App;
