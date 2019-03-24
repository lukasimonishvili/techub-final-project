import React from "react";
import { FeedbacklistCellFeedback } from "./FeedbacklistCellFeedback";
import { FeedbacklistCellProduct } from "./FeedbacklistCellProduct";
import { FeedbacklistCellAuthor } from "./FeedbacklistCellAuthor";
import { FeedbacklistCellId } from "./FeedbacklistCellId";


export const FeedbacklistTableRow = () => {
  return (
    <li className="Feedbacklist__table__row">
        <FeedbacklistCellFeedback TdFeedback="This is good product......Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit architecto, beatae sint ut adipisci reprehenderit cumque praesentium excepturi, ab pariatur laudantium sit, doloremque ea magnam molestias eligendi! Magni, fugiat praesentium?"/>
        <FeedbacklistCellProduct TdProduct="Archos Platinum 101B"/>
        <FeedbacklistCellAuthor TdAuthor="Jane Doe Paterson"/>
        <FeedbacklistCellId TdId="000002000002000002000002"/>
        <div class="Feedbacklist__table__action"> 
                <button type="button" class="Feedbacklist__table__button">Delete</button> 
        </div>
    </li>
  );
};
