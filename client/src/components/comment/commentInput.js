import React from "react";

export class CommentInput extends React.Component {
  render() {
    return (
      <>
        <input type="hidden" id="commentId" />
        <input
          id="comment"
          ref
          className="comment__input"
          placeholder="your comment"
          onKeyUp={e => {
            if (
              !e.target.value.length &&
              this.props.btn === "Edit your commetn"
            ) {
              this.props.btnStater("Publish");
            }
          }}
        />
      </>
    );
  }
}
