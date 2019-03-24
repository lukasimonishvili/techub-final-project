import React from "react";

export const AdditemUpload = () => {
  return (
    <input
      className="additem__upload"
      type="file"
      multiple
      accept="image/png, image/jpeg"
      name="upliad images"
      placeholder="upliad images"
      id="img"
    />
  );
};
