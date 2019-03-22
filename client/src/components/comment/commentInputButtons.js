import React from "react"
import { CommentOutputEdit } from "./commentOutputEdit";
import { CommentSend } from "./commentSend";

export const CommentInputButtons = () => {
    return( <div className="fl fl_dir_col">
    <CommentOutputEdit/>
    <CommentSend/>
    </div>)
}