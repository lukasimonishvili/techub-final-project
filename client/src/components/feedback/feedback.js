import React from "react";
import { FeedbackInput } from "./feedbackInput";
import { FeedbackButton } from "./feedbackButton";

export class Feedback extends React.Component {
  getCookie = cname => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  render() {
    if (this.getCookie("c3a4d").length == 24) {
      return (
        <div className="product__feedback fl" id="feedback">
          <FeedbackInput />
          <FeedbackButton
            productName={this.props.productName}
            userId={this.getCookie("c3a4d")}
            productId={this.props.productId}
          />
        </div>
      );
    } else {
      return <></>;
    }
  }
}
