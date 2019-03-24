import React from "react";
import { FeedbacklistCell } from "./FeedbacklistCell";
// import { შვილისმუდმივა } from "./საქაღალდე";

export const FeedbacklistRow = () => {
  return (
    <div className="Feedbacklist__table__row">
        <FeedbacklistCell Td="This is good product......Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit architecto, beatae sint ut adipisci reprehenderit cumque praesentium excepturi, ab pariatur laudantium sit, doloremque ea magnam molestias eligendi! Magni, fugiat praesentium?"/>
        <FeedbacklistCell Td="Iphone X"/>
        <FeedbacklistCell Td="Jane Doe Paterson"/>
        <FeedbacklistCell Td="000002000002000002000002"/>
        <button type='button' className='Feedbacklist__table__Cell--button'>Delete</button>
    </div>
  );
};
