import React from "react";
import { FeedbacklistCellFeedback } from "./FeedbacklistCellFeedback";
import { FeedbacklistCellProduct } from "./FeedbacklistCellProduct";
import { FeedbacklistCellId } from "./FeedbacklistCellId";
import Axios from "axios";
import swal from "sweetalert";

export class FeedbacklistTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.stater = this.stater.bind(this);
  }

  state = {
    feedbacks: []
  };

  stater(value) {
    this.setState({ feedbacks: value });
  }

  componentDidMount() {
    Axios.post("/getFeedbacks").then(res => {
      this.setState({ feedbacks: res.data });
    });
  }

  render() {
    return this.state.feedbacks.map(fdbck => {
      return (
        <li key={fdbck._id} className="Feedbacklist__table__row">
          <FeedbacklistCellFeedback TdFeedback={fdbck.body} />
          <FeedbacklistCellProduct TdProduct={fdbck.title} />
          <FeedbacklistCellId TdId={fdbck.productId} />
          <div className="Feedbacklist__table__action">
            <button
              type="button"
              className="Feedbacklist__table__button"
              onClick={() => {
                swal({
                  title: "are you sure?",
                  text: "Once delete feedback you cant return it",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true
                }).then(willDelete => {
                  if (willDelete) {
                    Axios.post("/removeFeedback", { id: fdbck._id }).then(
                      res => {
                        swal(res.data.message ,{icon: "success"});
                        this.setState({ feedbacks: res.data.data });
                      }
                    );
                  }
                });
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
}
