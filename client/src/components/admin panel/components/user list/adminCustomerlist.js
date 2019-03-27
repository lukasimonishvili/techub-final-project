import React from "react";
import { AdminCustomerlistCart } from "./adminCustomerlistCart";
export const AdminCustomerlist = () => {
  return (
    <div className="customerlist fl fl_dir_col">
      <div className="customerlist__search fl fl_jus_bet">
        <input className="customerlist__search--input" placeholder="Search" />
        <button className="customerlist__search--button">Search</button>
      </div>
      <ul className="customerlist__list">
        <li className=" customerlist__list__item">
          <span className="customerlist__list__item--text">Name</span>
          <span className="customerlist__list__item--text">Lastname</span>
          <span className="customerlist__list__item--text">User ID</span>
          {/* <span className="customerlist__list__item--text">User Cart</span> */}
          {/* <span className="customerlist__list__item--text">Remove User</span> */}
        </li>
        <li className=" customerlist__list__item">
          <span className="customerlist__list__item--user">user name</span>
          <span className="customerlist__list__item--user">user lastname</span>
          <span className="customerlist__list__item--user">
            012345678901234567890123
          </span>
          <button className="customerlist__list__item--user">cart</button>
          <button className="customerlist__list__item--user">
            remove user
          </button>
        </li>
        <AdminCustomerlistCart/>
        <li className=" customerlist__list__item">
          <span className="customerlist__list__item--user">user name</span>
          <span className="customerlist__list__item--user">user lastname</span>
          <span className="customerlist__list__item--user">
            012345678901234567890123
          </span>
          <button className="customerlist__list__item--user">cart</button>
          <button className="customerlist__list__item--user">
            remove user
          </button>
        </li>
      </ul>
    </div>
  );
};
