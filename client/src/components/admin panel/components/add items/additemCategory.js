import React from "react";
import Axios from "axios";

export class AdditemCategory extends React.Component {
  state = {
    categorys: []
  };

  componentDidMount() {
    Axios.post("/categoryList").then(res => {
      this.setState({ categorys: res.data });
    });
  }

  render() {
    return (
      <select
        id="category"
        className="additem__category"
        name="product category"
      >
        {this.state.categorys.map(cat => {
          return (
            <option key={cat.title} value={cat.title}>
              {cat.title}
            </option>
          );
        })}
      </select>
    );
  }
}
