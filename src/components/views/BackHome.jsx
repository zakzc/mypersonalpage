import React, { Component } from "react";
// import { Link } from "react-router-dom";
import grayHouseIcon from "../../assets/svg/grayHouse.svg";

export default class BackHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: this.props.isNavigationOn,
    };
    // this.updateNavigation = this.props.updateNavigation.bind(this);
  }

  render() {
    return (
      <div id="base">
        <img id="houseIcon" src={grayHouseIcon} alt="back to home page" />
      </div>
    );
  }
}
//////////////////////
