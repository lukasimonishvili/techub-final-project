import React from "react";

export const CategoryHeading = props => {
  return (
    <div className="category__head">
      <h2 className="category__head__heading">{props.cat}</h2>
    </div>
  );
};
