import React from "react";
import { CommentOutput } from "./commentOutput";
import { CommentInput } from "./commentInput";
import { CommentInputButtons } from "./commentInputButtons";
import Axios from "axios";

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.stater = this.stater.bind(this);
    this.btnStater = this.btnStater.bind(this);
  }

  state = {
    comments: [],
    btn: "Publish"
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

  componentDidMount() {
    Axios.get(`/comment/${this.props.productId}`).then(res => {
      this.setState({ comments: res.data });
    });
    setTimeout(() => {
      if (this.getCookie("c3a4d").length !== 24) {
        let comment = document.getElementById("comment");
        let publish = document.getElementById("publish");
        comment.style.display = "none";
        publish.style.display = "none";
      }
    }, 1500);
  }

  stater(value) {
    this.setState({ comments: value });
  }

  btnStater(value) {
    this.setState({ btn: value });
  }

  render() {
    return (
      <div className="comment fl">
        <CommentOutput btnStater={this.btnStater} com={this.state.comments} />
        <div className="comment__wrp">
          <CommentInput btn={this.state.btn} btnStater={this.btnStater} />
          <CommentInputButtons
            com={this.state.comments}
            btn={this.state.btn}
            btnStater={this.btnStater}
            stater={this.stater}
            productId={this.props.productId}
          />
        </div>
      </div>
    );
  }
}
