import React from "react"
import {Link } from "@reach/router";


export class ProductOnPageAddtocart extends React.Component {
    getCookie = cname => {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };
      render(){
          if(this.getCookie("c3a4d").length === 24){
              return <button className="productOnPage_name_buttons-addtocart">Add to cart</button>
          }else{
              return <Link to="/login" className="productOnPage_name_buttons-addtocart-link">Add to cart</Link>
          }
      }
}