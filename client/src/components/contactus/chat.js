import React from "react";
import { ChatClose } from "./chatClose";
import { ChatBody } from "./chatBody";
import { ChatInput } from "./chatInput";
import Axios from "axios";

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.chatSateHandler = this.chatSateHandler.bind(this);
    this.notificationStateHandler = this.notificationStateHandler.bind(this);
  }

  state = {
    chat: [],
    notification: 0
  };

  getCookie = cname => {
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

  chatSateHandler(value) {
    this.setState({
      chat: value
    });
  }

  notificationStateHandler(value) {
    this.setState({ notification: value });
  }

  intervalHandler(value) {
    let interval = setInterval(() => {
      Axios.post(`/getMessages`, { userId: this.getCookie("c3a4d") }).then(
        res => {
          if (res.data.notification) {
            console.log(res.data.notification);
          }
        }
      );
    }, 5 * 1000);
    if (!value) {
      clearInterval(interval);
    } else {
    }
  }

  componentDidMount() {
    Axios.post(`/getMessages`, { userId: this.getCookie("c3a4d") }).then(
      res => {
        if (res.data) {
          this.setState({
            chat: res.data.body,
            notification: res.data.notification
          });
        }
        let notification = document.getElementById("notification");
        if (this.state.notification) {
          notification.innerHTML = this.state.notification;
          notification.style.display = "block";
        }
      }
    );

    setInterval(() => {
      Axios.post(`/getMessages`, { userId: this.getCookie("c3a4d") }).then(
        res => {
          if (res.data.notification > 0) {
            this.setState({
              chat: res.data.body,
              notification: res.data.notification
            });
            let notification = document.getElementById("notification");
            let messageIcon = document.getElementById("messageIcon");
            if (messageIcon.style.display == "block") {
              notification.style.display = "block";
            }
            notification.innerHTML = this.state.notification;
          }
        }
      );
    }, 1 * 1000);
  }

  render() {
    return (
      <div className="chat fl fl_dir_col" id="chat">
        <ChatClose />
        <ChatBody chat={this.state.chat} />
        <ChatInput stater={this.chatSateHandler} />
      </div>
    );
  }
}
