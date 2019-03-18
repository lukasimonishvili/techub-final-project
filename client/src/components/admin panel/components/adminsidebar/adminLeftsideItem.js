import React from "react";
import {Link} from '@reach/router'
export const AdminLeftsideItem = props => {
  return (
    <>
      <Link className="admin__leftside__item" to={props.link}>{props.listItem}</Link>
    </>
  );
};
