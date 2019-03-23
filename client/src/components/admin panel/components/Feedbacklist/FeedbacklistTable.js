import React from "react";
import { FeedbacklistHeaderrow } from "./FeedbacklistHeaderrow";
import { FeedbacklistRow } from "./FeedbacklistRow";

export const FeedbacklistTable = () => {
  return (
    <div className="Feedbacklist__table">
        <FeedbacklistHeaderrow />
        <FeedbacklistRow />
        <FeedbacklistRow />
    </div>
  );
};
