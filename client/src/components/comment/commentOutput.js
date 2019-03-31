import React from "react";
export const CommentOutput = props => {
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
    <div className="comment__output">
      {props.com.map((com, index) => {
        return (
          <span
            key={index}
            className="comment__output__comment fl fl_dir_col"
            onClick={e => {
              let comment = document.getElementById("comment");
              let commentId = document.getElementById("commentId");
              if (com.userId === getCookie("c3a4d")) {
                comment.value = e.target.childNodes[0].nodeValue;
                commentId.value = com._id;
                props.btnStater("Edit your comment");
              }
            }}
          >
            {com.body}
            <span className="comment__output__username"> {com.author}</span>
          </span>
        );
      })}
    </div>
  );
};
