import React from "react";
import { FeedbackInput } from "./feedbackInput";
import { FeedbackButton } from "./feedbackButton";
import Axios from "axios";

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

  componentDidMount() {
    Axios.get(`/getOne/${this.props.productId}`).then(res => {
      if (res.data) {
        setTimeout(() => {
          if (this.getCookie("c3a4d").length !== 24) {
            let element = document.getElementById("feedback");
            element.style.display = "none";
          }
        }, 1500);
      }
    });
  }

  render() {
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
  }
}
