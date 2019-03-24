import React from "react";
import { Link } from "@reach/router";

export const ProductOnPageDetails = props => {
  return (
    <Link
      to={`/product/${props.productId}`}
      className="productOnPage_name_buttons-details"
    >
      See more info
    </Link>
  );
};
