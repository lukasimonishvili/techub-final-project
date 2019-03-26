import React from "react";
import { CartProductitem } from "./cartProductitem";

export class Cart extends React.Component {
  render() {
    return (
      <ul className="cart">
        {this.props.cart.map(item => {
          return (
            <CartProductitem
              key={item._id}
              photo={item.img[0]}
              productName={item.title}
              amount={item.amount}
              price={item.price}
              productId={item._id}
              stater={this.props.stater}
              cart={this.props.cart}
            />
          );
        })}
      </ul>
    );
  }
}
