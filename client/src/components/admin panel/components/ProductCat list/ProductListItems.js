import React from "react";
import { ProductListItemProduct } from "./ProductListItemProduct";
import Axios from "axios";

export class ProductListItems extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    Axios.get(`/getByCategory/${this.props.cat}`).then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return this.state.products.map(prod => {
      return (
        <ul key={prod._id} className="productlist__list">
          <li className="productlist__list__item fl fl_jus_bet">
            <div>{prod.title}</div>
            <div className="btn-container">
              <button className="ProductCat__Cat__actionbutton">Edit</button>
              <button className="ProductCat__Cat__actionbutton">Delete</button>
              <button
                onClick={e => {
                  e.target.parentNode.parentNode.parentNode.childNodes[1].classList.toggle(
                    "block"
                  );
                }}
              >
                toggle
              </button>
            </div>
          </li>
          <ProductListItemProduct product={prod} catList={this.props.catList} />
        </ul>
      );
    });
  }
}
