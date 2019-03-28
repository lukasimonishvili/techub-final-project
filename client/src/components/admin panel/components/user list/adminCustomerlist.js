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
          <input
            id="searchInp"
            className="customerlist__search--input"
            placeholder="Search"
          />
          <button
            className="customerlist__search--button"
            onClick={e => {
              let searchInp = document.getElementById("searchInp");
              let userDomList = document.getElementById("userList");
              if (searchInp.value.length) {
                Axios.post("/userSearch", { search: searchInp.value }).then(
                  res => {
                    if (res.data.message === "User not found") {
                      swal(res.data.message, { icon: "error" });
                    } else if (res.data.message === "id") {
                      for (let i = 1; i < userDomList.childNodes.length; i++) {
                        let userId =
                          userDomList.childNodes[i].childNodes[0].childNodes[2]
                            .innerHTML;
                        console.log(userId);
                        if (userId == res.data.data._id) {
                          userDomList.insertBefore(
                            userDomList.childNodes[i],
                            userDomList.childNodes[1]
                          );
                          break;
                        }
                      }
                    } else if (res.data.message == "name") {
                      for (let i = 1; i < userDomList.childNodes.length; i++) {
                        let userName = `${
                          userDomList.childNodes[i].childNodes[0].childNodes[0]
                            .innerHTML
                        } ${
                          userDomList.childNodes[i].childNodes[0].childNodes[1]
                            .innerHTML
                        }`;
                        if (
                          userName ==
                          res.data.data.name + " " + res.data.data.lastName
                        ) {
                          userDomList.childNodes[i].style.color = "green";
                          userDomList.insertBefore(
                            userDomList.childNodes[i],
                            userDomList.childNodes[1]
                          );
                          break;
                        }
                      }
                    }
                  }
                );
              }
            }}
          >
            Search
          </button>
        </div>
        <ul id="userList" className="customerlist__list">
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
