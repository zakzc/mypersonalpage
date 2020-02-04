import React, { Component } from "react";
import { Link } from "react-router-dom";
import myImageToDisplay from "../img/grayHouse.svg";

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStatus: this.props.isNavigationOn,
    };
    console.log("props ==>  ", this.props.navStatus);
  }
  render() {
    return (
      <React.Fragment>
        <div id="base">
          <Link to="/">
            <img
              id="houseIcon"
              src={myImageToDisplay}
              alt="back to home page"
            />
          </Link>
          <h4>==>: {this.props.navStatus}</h4>
        </div>
      </React.Fragment>
    );
  }
}
