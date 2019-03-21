import React from "react";
import Axios from "axios";

import { CartProductitem } from "./cartProductitem";

export class Cart extends React.Component {
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
      <ul className="cart">
        {this.state.cart.map(item => {
          return (
            <CartProductitem
              key={item._id}
              photo={item.img[0]}
              productName={item.title}
              amount={item.amount}
              price={item.price}
              productId={item._id}
              stateHandler={this.stateHandler}
              cart={this.state.cart}
            />
          );
        })}
      </ul>
    );
  }
}
