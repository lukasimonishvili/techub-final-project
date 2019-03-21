import React from "react";
import { CartHeader } from "./cartHeader";
import { Cart } from "./cart";
import { CartBuyitnow } from "./cartBuyitnow";

export class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.hadleContainerState = this.hadleContainerState.bind(this);
  }

  state = {
    fake: true
  };

  hadleContainerState(value) {
    this.setState({ fake: value });
  }
  // console.log(props.cart);
  render() {
    return (
      <div className="cart__container">
        <CartHeader />
        <Cart />
        <CartBuyitnow
          fake={this.state.fake}
          stater={this.hadleContainerState}
        />
      </div>
    );
  }
}
