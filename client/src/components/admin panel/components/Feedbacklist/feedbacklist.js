import React from "react";
import { FeedbacklistTitle } from "./FeedbacklistTitle";
import { FeedbacklistTable } from "./FeedbacklistTable";
// import { შვილისმუდმივა } from "./საქაღალდე";

export const Feedbacklist = () => {
  return (
    <div className="Feedbacklist">
        {/* <შვილის მუდმივა /> */}
        <FeedbacklistTitle />
        <FeedbacklistTable />
    </div>
  );
};
