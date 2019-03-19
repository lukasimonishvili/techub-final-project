import React from "react";
import message from "../../img/messageUs.png";

export class MessageIcon extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <img
        src={message}
        className="messageIcon"
        id="messageIcon"
        onClick={() => {
          let chat = document.getElementById("chat");
          let messageIcon = document.getElementById("messageIcon");
          chat.style.display = "flex";
          messageIcon.style.display = "none";
        }}
      />
    );
  }
}
