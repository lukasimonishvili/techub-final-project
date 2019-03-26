import React from "react";
import { HeaderSearchInput } from "./headerSearchInput";
import { SearchDropdownItem } from "../searchDropdownItem/searchDropdownItem";

export class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.stater = this.stater.bind(this);
  }

  state = {
    search: []
  };
  stater(value) {
    this.setState({ search: value });
  }

  render() {
    return (
      <li className="header__search fl fl_jus_bet">
        <HeaderSearchInput stater={this.stater} />
        <SearchDropdownItem srch={this.state.search} />
      </li>
    );
  }
}
