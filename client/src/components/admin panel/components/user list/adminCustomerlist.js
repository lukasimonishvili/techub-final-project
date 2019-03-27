import React from "react";
import { AdminCustomerlistCart } from "./adminCustomerlistCart";
import Axios from "axios";
import swal from "sweetalert";

export class AdminCustomerlist extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    Axios.post("/userList").then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div className="customerlist fl fl_dir_col">
        <div className="customerlist__search fl fl_jus_bet">
          <input className="customerlist__search--input" placeholder="Search" />
          <button className="customerlist__search--button">Search</button>
        </div>
        <ul className="customerlist__list">
          <li className="customerlist__list__item customerlist__list__item--heading">
            <span className="customerlist__list__item--text">Name</span>
            <span className="customerlist__list__item--text">Lastname</span>
            <span className="customerlist__list__item--text">User ID</span>
          </li>
          {this.state.users.map(user => {
            if (user._id !== "5c914847298b1b13064c3a4d") {
              return (
                <div key={user._id}>
                  <li className=" customerlist__list__item">
                    <span className="customerlist__list__item--user">
                      {user.name}
                    </span>
                    <span className="customerlist__list__item--user">
                      {user.lastName}
                    </span>
                    <span className="customerlist__list__item--user">
                      {user._id}
                    </span>
                    <button
                      className="customerlist__list__item--user"
                      onClick={e => {
                        e.target.parentNode.nextSibling.classList.toggle(
                          "block"
                        );
                      }}
                    >
                      cart
                    </button>
                    <button
                      className="customerlist__list__item--user"
                      onClick={() => {
                        swal({
                          title: "Are you sure",
                          text: "to delete this user?",
                          icon: "warning",
                          dangerMode: true,
                          buttons: ["Cancel", "Delete"]
                        }).then(willDelete => {
                          if (willDelete) {
                            Axios.post("/removeUser", {
                              userId: user._id
                            }).then(res => {
                              swal(res.data.message, { icon: "success" });
                              this.setState({ users: res.data.data });
                            });
                          }
                        });
                      }}
                    >
                      remove user
                    </button>
                  </li>
                  <AdminCustomerlistCart cart={user.cart} />
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
