import React from "react";
import { CommentOutput } from "./commentOutput";
import { CommentInput } from "./commentInput";
import { CommentInputButtons } from "./commentInputButtons";


export const Comment = () => {
  return (
    <div className="comment fl">
      <CommentOutput />
      <CommentInput />
      <CommentInputButtons/>
    </div>
  );
};
