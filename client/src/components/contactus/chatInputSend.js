import React from "react";
import Axios from "axios";

export const ChatInputSend = props => {
  let getCookie = cname => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  return (
    <button
      className="chat__input__send"
      onClick={() => {
        let messageInp = document.getElementById("messageInp");
        if (
          messageInp.value.length > 0 &&
          messageInp.value.replace(/\s/g, "").length
        ) {
          Axios.post(`/messageUserToAdmin`, {
            userId: getCookie("c3a4d"),
            body: messageInp.value
          }).then(res => {
            messageInp.value = "";
            props.stater(res.data.data);
          });
        }
        let x = setTimeout(function() {
          clearTimeout(x);
          let body = document.getElementById("chatBody");
          body.scrollTo(0, body.offsetHeight * 200);
        }, 500);
      }}
    >
      Send
    </button>
  );
};
