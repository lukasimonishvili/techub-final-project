import React from "react";
import { AdminCustomerlistTableDataA } from "./adminCustomerlistTableDataA";
import { AdminCustomerlistTableData } from "./adminCustomerlistTableData";
import Axios from "axios";

export class AdminCustomerlistTableRow extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    Axios.post("/userList").then(res => {
      this.setState({ users: res.data });
      console.log(this.state.users);
    });
  }

  render() {
    return this.state.users.map(user => {
      if (user._id !== "5c914847298b1b13064c3a4d") {
        return (
          <tr key={user._id} className="customerlist__table__row">
            <AdminCustomerlistTableDataA collumnDataA={user._id} />
            <AdminCustomerlistTableData collumnData={user.name} />
            <AdminCustomerlistTableData collumnData={user.lastName} />
            <AdminCustomerlistTableDataA collumnDataA={user.eMail} />
            <AdminCustomerlistTableData collumnData={user.birthDay} />
          </tr>
        );
      }
    });
  }
}
