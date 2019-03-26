import React from "react";
import Axios from "axios";

export const FeedbackButton = props => {
  return (
    <button
      className="product__feedback__button"
      onClick={() => {
        let feedbackInp = document.getElementById("feedbackInp");
        if (feedbackInp.value.length) {
          Axios.post("/addFeedback", {
            userId: props.userId,
            productId: props.productId,
            body: feedbackInp.value,
            title: props.productName
          }).then(res => {
            feedbackInp.value = "";
            alert(res.data.message);
          });
        }
      }}
    >
      Send Feedback
    </button>
  );
};
