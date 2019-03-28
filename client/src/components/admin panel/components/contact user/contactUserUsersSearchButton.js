import React from "react";
import Axios from "axios";
import swal from "sweetalert";

export const ContactUserUsersSearchButton = () => {
  return (
    <button
      id="searchBtn"
      className="contactuser__rightside__search--button"
      onClick={() => {
        let searchUser = document.getElementById("searchUser");
        let userDomList = document.getElementById("searchBtn").parentNode
          .nextSibling;
        if (searchUser.value.length) {
          Axios.post("/userSearch", { search: searchUser.value }).then(res => {
            if (res.data.message === "User not found") {
              swal(res.data.message, { icon: "error" });
            } else if (res.data.message === "id") {
              for (let i = 0; i < userDomList.childNodes.length; i++) {
                let userId = userDomList.childNodes[i].innerHTML.split(" ")[3];
                if (userId == res.data.data._id) {
                  userDomList.childNodes[i].style.color = "green";
                  userDomList.insertBefore(
                    userDomList.childNodes[i],
                    userDomList.childNodes[0]
                  );
                  break;
                }
              }
            } else if (res.data.message == "name") {
              for (let i = 0; i < userDomList.childNodes.length; i++) {
                let userName = `${
                  userDomList.childNodes[i].innerHTML.split(" ")[0]
                } ${userDomList.childNodes[i].innerHTML.split(" ")[1]}`;
                if (
                  userName ==
                  res.data.data.name + " " + res.data.data.lastName
                ) {
                  userDomList.childNodes[i].style.color = "green";
                  userDomList.insertBefore(
                    userDomList.childNodes[i],
                    userDomList.childNodes[0]
                  );
                  break;
                }
              }
            }
          });
        }
      }}
    >
      Search
    </button>
  );
};
