import React from "react";
import { ProductOnPage } from "./productOnPage";
import Axios from "axios";

export class ProductOnPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    products: []
  };

  componentDidMount() {
    Axios.get("/getAllproduct").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="productOnPage__container">
        {this.state.products.map(item => {
          return (
            <>
              <ProductOnPage
                price={item.price}
                productName={item.title}
                image={item.img[0]}
                key={item._id}
              />
            </>
          );
        })}
      </div>
    );
  }
}
