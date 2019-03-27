import React from "react";
import Axios from "axios";

export const ContactUserMessagesInputSend = props => {
  return (
    <button
      className="contactuser__leftside__input--send"
      onClick={() => {
        let message = document.getElementById("messageInp");
        if (
          message.value.length &&
          props.userName.length &&
          props.userId.length === 24
        ) {
          Axios.post("/messageAdminToUser", {
            userId: props.userId,
            body: message.value
          }).then(res => {
            message.value = "";
            props.chatStater(res.data.data);
          });
        }
        let x = setTimeout(function() {
          clearTimeout(x);
          let body = document.getElementById("adminMessage");
          body.scrollTo(0, body.offsetHeight * 200);
        }, 500);
      }}
    >
      Send
    </button>
  );
};
