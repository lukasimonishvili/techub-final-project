import React from "react";
import { LoggedInHeader } from "./components/header/loggedInHeader";
import { Sidebar } from "./components/sidebar/sidebar";
import { CartContainer } from "./components/cart/cartContainer";
import { Footer } from "./components/footer/footer";
import { Message } from "./components/message icon/message";
import { Chat } from "./components/contactus/chat";
import { Router } from "@reach/router";
import Axios from "axios";
import { ProductOnPageContainer } from "./components/product item/productOnPageContainer";
import { Product } from "./components/product/product";
import { Account } from "./components/user account/account";
export class LoggedInUser extends React.Component {
  state = {
    logedInUser: {},
    cart: []
  };

  getCookie = cname => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  componentDidMount() {
    Axios.post(`/getOneUser/${this.getCookie("c3a4d")}`).then(res => {
      this.setState({ logedInUser: res.data });
    });
  }

  render() {
    return (
      <>
        <LoggedInHeader />
        <Sidebar />
        <Chat />
        <Router>
          <CartContainer path="/mycart" />
          <Product path="product/:productId" />
          <Account path="/account"/>
        </Router>
        {/* <ProductOnPageContainer /> */}
        {/* <Product /> */}
        <Message />
        <Footer />
      </>
    );
  }
}
