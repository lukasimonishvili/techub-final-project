import React from "react";
import Axios from "axios";

export const CommentOutputEdit = props => {
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
      id="publish"
      className="comment__output--edit"
      onClick={() => {
        let comment = document.getElementById("comment");
        let commentId = document.getElementById("commentId");
        let newComments = props.com;
        if (comment.value.length) {
          switch (props.btn) {
            case "Publish":
              Axios.post("/addComment", {
                userId: getCookie("c3a4d"),
                productId: props.productId,
                body: comment.value
              }).then(res => {
                newComments.push(res.data.newComment);
                comment.value = "";
                props.stater(newComments);
              });
              break;
            case "Edit your comment":
              Axios.post("/editComment", {
                commentId: commentId.value,
                body: comment.value
              }).then(res => {
                for (let i = 0; i < newComments.length; i++) {
                  if (newComments[i]._id === commentId.value) {
                    newComments.splice(i, 1, res.data.newComment);
                    props.stater(newComments);
                  }
                }
              });
              break;
          }
        }
      }}
    >
      {props.btn}
    </button>
  );
};
