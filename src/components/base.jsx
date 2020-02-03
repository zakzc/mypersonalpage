import React, { Component } from "react";
import { Link } from "react-router-dom";
import myImageToDisplay from "../img/grayHouse.svg";

// const x = ["string a", "string b"];

export default class Base extends Component {
  render() {
    console.log("Where are my props? ", this.state);
    return (
      <React.Fragment>
        <div id="base">
          {/* <h4>Curriculum</h4>
        {/* <img id="houseIcon" src={myImageToDisplay} alt="sitting man" /> */}
          {/* <p>This is a test for state:</p>
          {this.state.notes.map(i => (
            <li key={i}>{i}</li>
          ))}{" "} */}
          {/* <button onClick={(this.props.isNavigationOn = true)}> */}
          <Link to="/">
            <img
              id="houseIcon"
              src={myImageToDisplay}
              alt="back to home page"
            />
          </Link>
          <h2>Is there somethign here: {this.state}</h2>
        </div>
      </React.Fragment>
    );
  }
}
