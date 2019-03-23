import React from "react";
import { ContactUserUsersListItem } from "./contactUserUsersListItem";

export class ContactUserUsersList extends React.Component {
  render() {
    return (
      <ul className="contactuser__rightside__list" ref="col1" id="userList">
        {this.props.users.map(user => {
          if (user._id !== "5c914847298b1b13064c3a4d") {
            return (
              <ContactUserUsersListItem
                key={user._id}
                userName={user.name}
                lastName={user.lastName}
                userId={user._id}
                stater={this.props.stater}
              />
            );
          }
        })}
      </ul>
    );
  }
}
