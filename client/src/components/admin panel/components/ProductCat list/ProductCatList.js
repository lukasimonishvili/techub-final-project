import React from "react";
import { ProductCatCat } from "./ProductCatCat";
import Axios from "axios";

export class ProductCatList extends React.Component {
  constructor(props) {
    super(props);
    this.catStater = this.catStater.bind(this);
  }

  state = {
    categories: []
  };

  catStater(value) {
    this.setState({ categories: value }, console.log(this.state.categories));
  }

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
              catStater={this.catStater}
            />
          );
        })}
      </div>
    );
  }
}
