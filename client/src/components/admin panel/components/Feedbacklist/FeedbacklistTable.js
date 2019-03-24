import React from "react";
import { FeedbacklistTableHeaderRow } from "./FeedbacklistTableHeaderRow";
import { FeedbacklistTableRow } from "./FeedbacklistTableRow";


export const FeedbacklistTable = () => {
  return (
    <ul className="Feedbacklist__table">
      <FeedbacklistTableHeaderRow />
      <FeedbacklistTableRow />
      <FeedbacklistTableRow />
      <FeedbacklistTableRow />
    </ul>
  );
};
