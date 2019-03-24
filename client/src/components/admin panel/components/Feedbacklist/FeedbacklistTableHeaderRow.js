import React from "react";


export const FeedbacklistTableHeaderRow = () => {
  return (
    <li className="Feedbacklist__table__row">
        <div className="Feedbacklist__table__Feedback">
            Feedback
        </div>
        <div className="Feedbacklist__table__Product">
            Product
        </div>    
        <div className="Feedbacklist__table__Author">
            Author
        </div>
        <div className="Feedbacklist__table__ID">
            Author’s ID
        </div>
        <div className="Feedbacklist__table__action">
            action
        </div>
    </li>
  );
};
