import React from "react";
import { ProductOnPage } from "./productOnPage";
import Axios from "axios";
import { CategoryHeading } from "./categoryHeading";

export class ProductOnPageContainer extends React.Component {
  state = {
    products: []
  };

  componentDidUpdate() {
    if (this.props.cat === "ALL") {
      Axios.get("/getAllproduct").then(res => {
        this.setState({ products: res.data });
      });
    } else {
      Axios.get(`/getByCategory/${this.props.cat}`).then(res => {
        this.setState({ products: res.data.data });
      });
    }
  }

  componentDidMount() {
    Axios.get("/getAllproduct").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="productOnPage__container">
        <CategoryHeading cat={this.props.cat} />
        {this.state.products.map((item, index) => {
          return (
            <ProductOnPage
              amount={item.amount}
              price={item.price}
              productId={item._id}
              productName={item.title}
              image={item.img[0]}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
