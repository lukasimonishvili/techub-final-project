import React from "react";
import Axios from "axios";

export const AdditemSend = () => {
  return (
    <button
      className="additem__send"
      onClick={() => {
        let category = document.getElementById("category");
        let img = document.getElementById("img");
        let price = document.getElementById("price");
        let title = document.getElementById("title");
        let amount = document.getElementById("amount");
        let description = document.getElementById("description");
        if (
          category.value.length &&
          img.files.length &&
          price.value.length &&
          title.value.length &&
          amount.value.length &&
          description.value.length
        ) {
          let fd = new FormData();
          fd.append("title", title.value);
          fd.append("price", price.value);
          fd.append("amount", amount.value);
          fd.append("description", description.value);
          fd.append("category", category.value);
          for (let i = 0; i < img.files.length; i++) {
            fd.append("img", img.files[i]);
          }
          fd.append("img", img.files);
          Axios.post("/addProduct", fd, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(res => {
            alert(res.data.message);
          });
        } else {
          alert("all fields are required");
        }
        let fd = new FormData();
      }}
    >
      Send
    </button>
  );
};
