import React from "react";
import { AccountContainerBodyHistoryList } from "./accountContainerBodyHistoryList";
import { AccountContainerBodyHistoryClear } from "./accountContainerBodyHistoryClear";

export class AccountContainerBodyHistory extends React.Component {
  render() {
    return (
      <div className="account__container__body--history" id="history">
        <AccountContainerBodyHistoryClear
          historyStater={this.props.historyStater}
        />
        <AccountContainerBodyHistoryList history={this.props.history} />
      </div>
    );
  }
}
