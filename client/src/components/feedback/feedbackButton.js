import React from "react";
import Axios from "axios";
import swal from "sweetalert";

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
            swal(res.data.message, { icon: "success" });
          });
        }
      }}
    >
      Send Feedback
    </button>
  );
};
