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
import { Footer } from "./components/footer/footer";
import { SearchDropdownItem } from "./components/searchDropdownItem/searchDropdownItem";
import { Admin } from "./components/admin panel/components/adminsidebar/admin";
import { Additem } from "./components/admin panel/components/add items/additem";
import { Chat } from "./components/contactus/chat";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Admin/>
        <Additem/>
        <Chat />
        {/* <Product /> */}
        {/* <Comment /> */}
        {/* <Feedback /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <CartContainer /> */}
        {/* <Footer /> */}
        {/* <SearchDropdownItem /> */}
        
        <Admin />
      </>
    );
  }
}

export default App;
