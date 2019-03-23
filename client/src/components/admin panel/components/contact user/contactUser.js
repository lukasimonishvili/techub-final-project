import React from "react";
import { ContactUserMessages } from "./contactUserMessages";
import { ContactUserUsers } from "./contactUserUsers";
import Axios from "axios";

export class ContactUser extends React.Component {
  constructor(props) {
    super(props);
    this.setBothState = this.setBothState.bind(this);
    this.setOnlyCahtState = this.setOnlyCahtState.bind(this);
  }

  state = {
    users: [],
    chat: [],
    chatUser: "",
    userId: ""
  };

  componentDidMount() {
    Axios.post("userList").then(res => {
      this.setState({ users: res.data });
    });
    setTimeout(() => {
      let parent = document.getElementById("userList");
      setInterval(() => {
        Axios.post("/checkNotificationsForAdmin").then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].notification) {
              for (let k = 0; k < parent.childElementCount; k++) {
                let element = parent.childNodes[k];
                let elementHandler = element.innerHTML.split(" ")[3];
                if (elementHandler === res.data[i].from) {
                  parent.insertBefore(element, parent.childNodes[0]);
                  if (res.data[i].from !== this.state.userId) {
                    element.style.color = "red";
                  }
                }
              }
              if (res.data[i].from === this.state.userId) {
                Axios.post("/getMessages", { userId: res.data[i].from }).then(
                  message => {
                    this.setState({ chat: message.data.body });
                  }
                );
              }
            }
          }
        });
      }, 5000);
    }, 2 * 1000);
  }

  setBothState(userId, chatUser) {
    Axios.post("/getMessages", { userId }).then(res => {
      this.setState({ chat: res.data.body, chatUser, userId });
    });
  }

  setOnlyCahtState(value) {
    this.setState({ chat: value });
  }

  render() {
    return (
      <div className="contactuser fl">
        <ContactUserMessages
          chat={this.state.chat}
          userName={this.state.chatUser}
          chatStater={this.setOnlyCahtState}
          userId={this.state.userId}
        />
        <ContactUserUsers
          userName={this.state.chatUser}
          stater={this.setBothState}
          users={this.state.users}
        />
      </div>
    );
  }
}
