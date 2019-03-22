import React from "react";
import { ChatClose } from "./chatClose";
import { ChatBody } from "./chatBody";
import { ChatInput } from "./chatInput";
import Axios from "axios";

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
  }

  state = {
    chat: []
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

  stateHandler(value) {
    this.setState({
      chat: value
    });
  }

  componentDidMount() {
    Axios.post(`/getMessages`, { userId: this.getCookie("c3a4d") }).then(
      res => {
        if (res.data) {
          this.setState({ chat: res.data.body });
        }
        console.log(this.state.chat);
      }
    );
  }

  render() {
    return (
      <div className="chat fl fl_dir_col" id="chat">
        <ChatClose />
        <ChatBody chat={this.state.chat} />
        <ChatInput stater={this.stateHandler} />
      </div>
    );
  }
}
