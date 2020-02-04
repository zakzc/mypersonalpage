import React, { Component } from "react";
import { Link } from "react-router-dom";
import myImageToDisplay from "../img/grayHouse.svg";

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: this.props.isNavigationOn,
    };
    this.sendNavDataBack = () => {
      this.props.updateNavigation(true);
      console.log("UP UP UP");
    };
    console.log("props ==>  ", this.props.navStatus);
  }
  //////////////////////
  render() {
    return (
      <React.Fragment>
        <div id="base" onClick={this.sendNavDataBack}>
          <Link to="/">
            <img
              id="houseIcon"
              src={myImageToDisplay}
              alt="back to home page"
            />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
