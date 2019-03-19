import React from "react";
import { Link } from "@reach/router";
export const AdminLeftsideItem = props => {
  return (
    <>
      <Link
        onClick={() => {
          if (props.listItem == "Log Out") {
            let removeCookie = cname => {
              var d = new Date();
              d.setTime(d.getTime() + 0 * 60 * 1000);
              var expires = "expires=" + d.toUTCString();
              document.cookie = cname + "=;" + expires + ";path=/";
            };
            let setCookie = (cname, cvalue, exdays) => {
              var d = new Date();
              d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
              var expires = "expires=" + d.toUTCString();
              document.cookie =
                cname + "=" + cvalue + ";" + expires + ";path=/";
            };
            removeCookie("admin");
            setCookie("admin", false, 3650);
            window.location.replace("/");
          }
        }}
        className="admin__leftside__item"
        to={props.link}
      >
        {props.listItem}
      </Link>
    </>
  );
};
