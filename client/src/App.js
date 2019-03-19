import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
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
import { AdminCustomerlist } from "./components/admin panel/components/user list/adminCustomerlist";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {/* <Product /> */}
        {/* <Comment /> */}
        {/* <Feedback /> */}
        <Router>
          <CartContainer path="/mycart" />
          <Login path="/login" />
          <Register path="/register" />
        </Router>
        {/* <SearchDropdownItem /> */}
        {/* <Footer /> */}
        {/* <Admin /> */}
        {/* <Chat /> */}
        <AdminCustomerlist />
      </>
    );
  }
}

export default App;
