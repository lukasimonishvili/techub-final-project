import React from "react";
import { ProductCatCat } from "./ProductCatCat";
import Axios from "axios";

export class ProductCatList extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    Axios.post("/categoryList").then(res => {
      this.setState({ categories: res.data });
    });
  }

  render() {
    return (
      <div className="ProductCat__List">
        {this.state.categories.map(cat => {
          return (
            <ProductCatCat
              key={cat._id}
              catList={this.state.categories}
              cat={cat.title}
            />
          );
        })}
      </div>
    );
  }
}
