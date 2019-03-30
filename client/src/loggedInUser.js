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
import { ERROR404 } from "./components/404/404";

export class LoggedInUser extends React.Component {
  constructor(props) {
    super(props);
    this.balanceStateHandler = this.balanceStateHandler.bind(this);
    this.historyStateHandler = this.historyStateHandler.bind(this);
    this.userStateHandler = this.userStateHandler.bind(this);
    this.catStater = this.catStater.bind(this);
  }

  state = {
    user: {},
    balance: 0,
    history: [],
    cat: "ALL"
  };

  balanceStateHandler(value) {
    this.setState({ balance: value });
  }

  historyStateHandler(value) {
    this.setState({ history: value });
  }

  userStateHandler(value) {
    this.setState({ user: value });
  }

  catStater(value) {
    this.setState({ cat: value });
  }

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
      this.setState({
        user: res.data,
        balance: res.data.balance,
        history: res.data.shoppHistory
      });
    });
  }

  render() {
    return (
      <>
        <LoggedInHeader balance={this.state.balance} />
        <Sidebar catStater={this.catStater} userName={this.state.user.name} />
        <Chat />
        <Router>
          <ERROR404 default/>
          <CartContainer
            baanceStater={this.balanceStateHandler}
            historyStater={this.historyStateHandler}
            path="/mycart"
          />
          <Account
            path="/account"
            history={this.state.history}
            baanceStater={this.balanceStateHandler}
            historyStater={this.historyStateHandler}
            userStater={this.userStateHandler}
            user={this.state.user}
          />
          <Product path="product/:productId" />
          <ProductOnPageContainer cat={this.state.cat} path="/" />
        </Router>
        <Message />
        <Footer />
      </>
    );
  }
}
