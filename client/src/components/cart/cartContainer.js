import React from "react";
import { CartHeader } from "./cartHeader";
import { Cart } from "./cart";
import { CartBuyitnow } from "./cartBuyitnow";
import Axios from "axios";

export class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
  }

  state = {
    cart: []
  };

  stateHandler(value) {
    this.setState({
      cart: value
    });
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
      this.setState({ cart: res.data.cart });
    });
  }

  render() {
    return (
      <div className="cart__container">
        <CartHeader />
        <Cart stater={this.stateHandler} cart={this.state.cart} />
        <CartBuyitnow
          cart={this.state.cart}
          baanceStater={this.props.baanceStater}
          historyStater={this.props.historyStater}
          stater={this.stateHandler}
        />
      </div>
    );
  }
}
