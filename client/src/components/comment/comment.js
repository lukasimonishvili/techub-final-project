import React from "react";
import { CommentOutput } from "./commentOutput";
import { CommentInput } from "./commentInput";
import { CommentSend } from "./commentSend";

export const Comment = () => {
  return (
    <div className="comment fl">
      <CommentOutput />
      <CommentInput />
      <CommentSend />
    </div>
  );
};
