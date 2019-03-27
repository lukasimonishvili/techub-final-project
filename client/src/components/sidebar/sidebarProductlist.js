import React from "react";
import { SidebarProducItem3 } from "./sidebarProductItem";
import { Link } from "@reach/router";
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
        <Link
        to="/"
          className="sidebar__productitem"
          onClick={() => {
            let sidebar = document.getElementById("sidebar");
            sidebar.style.display = "none";
            window.scrollTo(0, 0);
            this.props.catStater("ALL");
          }}
        >
          ALL
        </Link>
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
