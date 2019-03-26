import React from "react";
import { ProductListItemProduct } from "./ProductListItemProduct";
import Axios from "axios";

export class ProductListItems extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    Axios.get(`/getByCategory/${this.props.cat}`).then(res => {
      this.setState({ products: res.data.data });
    });
  }

  render() {
    return this.state.products.map(prod => {
      return (
        <ul key={prod._id} className="productlist__list">
          <li className="productlist__list__item fl fl_jus_bet">
            <div>{prod.title}</div>
            <div className="btn-container">
              <button
                className="ProductCat__Cat__actionbutton"
                onClick={e => {
                  e.target.parentNode.parentNode.parentNode.childNodes[1].classList.toggle(
                    "block"
                  );
                }}
              >
                Edit
              </button>
              <button
                className="ProductCat__Cat__actionbutton"
                onClick={e => {
                  let productId =
                    e.target.parentNode.parentNode.nextSibling.childNodes[0];
                  let currentProduct = this.state.products;
                  for (let i = 0; i < currentProduct.length; i++) {
                    if (productId.value === currentProduct[i]._id) {
                      currentProduct.splice(i, 1);
                    }
                  }
                  Axios.post("/removeProduct", {
                    productId: productId.value
                  }).then(res => {
                    alert(res.data.message);
                    this.setState({ products: currentProduct });
                  });
                }}
              >
                Delete
              </button>
            </div>
          </li>
          <ProductListItemProduct product={prod} catList={this.props.catList} />
        </ul>
      );
    });
  }
}
