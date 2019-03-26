import React from "react";
import { CommentOutputEdit } from "./commentOutputEdit";

export const CommentInputButtons = props => {
  return (
    <div className="fl fl_dir_col">
      <CommentOutputEdit
        btn={props.btn}
        stater={props.stater}
        com={props.com}
        productId={props.productId}
      />
    </div>
  );
};
