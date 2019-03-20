import React from "react"
import {LoggedInHeader} from "./components/header/loggedInHeader";
import { Sidebar } from "./components/sidebar/sidebar";
import { Login } from "./components/login/login";
import { CartContainer } from "./components/cart/cartContainer";
import { Register } from "./components/register/register";
import { Product } from "./components/product/product";
import { Footer } from "./components/footer/footer";
import { Message } from "./components/message icon/message";
import { Chat } from "./components/contactus/chat";
import {Router } from "@reach/router"
export const LoggedInUser = () => {
    return (
        <>
        <LoggedInHeader/>
        <Sidebar />
        <Chat/>
        <Router>
          <CartContainer path="/mycart" />
          <Login path="/login" />
          <Register path="/register" />
          <Product path="product/:productId" />
        </Router>
        <Message />
        <Footer />
        </>
    )
}