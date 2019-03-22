import React from "react";
import { FeedbackInput } from "./feedbackInput";
import { FeedbackButton } from "./feedbackButton";

export const Feedback = () => {
  return (
    <div className="product__feedback fl">
      <FeedbackInput />
      <FeedbackButton />
    </div>
  );
};
