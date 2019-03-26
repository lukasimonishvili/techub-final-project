import React from "react";
import { SidebarProducItem3 } from "./sidebarProductItem";
import Axios from "axios";

export class SidebarProductlist extends React.Component {
  state = {
    cats: []
  };

  componentDidMount() {
    Axios.post("/categoryList").then(res => {
      this.setState({ cats: res.data });
    });
  }

  render() {
    return (
      <ul className="sidebar__productlist">
        <li
          className="sidebar__productitem"
          onClick={() => {
            let sidebar = document.getElementById("sidebar");
            sidebar.style.display = "none";
            this.props.catStater("ALL");
          }}
        >
          ALL
        </li>
        {this.state.cats.map(cats => {
          return (
            <SidebarProducItem3
              catStater={this.props.catStater}
              key={cats._id}
              cat={cats.title}
            />
          );
        })}
      </ul>
    );
  }
}
