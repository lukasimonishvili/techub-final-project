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

  componentDidMount() {
    Axios.get(`/comment/${this.props.productId}`).then(res => {
      this.setState({ comments: res.data });
    });
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
        <CommentInput btn={this.state.btn} btnStater={this.btnStater} />
        <CommentInputButtons
          com={this.state.comments}
          btn={this.state.btn}
          btnStater={this.btnStater}
          stater={this.stater}
          productId={this.props.productId}
        />
      </div>
    );
  }
}
