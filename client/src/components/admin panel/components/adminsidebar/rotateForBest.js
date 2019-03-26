import React from "react";
import rotate from "../../../../img/rotate.gif";
export const RotateForBest = () => {
  return (
    <div className="rotate fl fl_dir_col">
      <img className="rotate__image" src={rotate} />
      <span className="rotate__text">
        Rotate your device for best experience
      </span>
    </div>
  );
};
