import React from "react";
import { FeedbacklistHeadercell } from "./FeedbacklistHeadercell";
// import { შვილისმუდმივა } from "./საქაღალდე";

export const FeedbacklistHeaderrow = () => {
  return (
    <div className="Feedbacklist__table__headerrow">
        {/* <შვილის მუდმივა /> */}
        <FeedbacklistHeadercell Th="Feedback"/>
        <FeedbacklistHeadercell Th="Product"/>
        <FeedbacklistHeadercell Th="Author"/>
        <FeedbacklistHeadercell Th="Author’s"/>
        <FeedbacklistHeadercell Th="action"/>
    </div>
  );
};
