import React, { Component } from "react";

export default class Element1 extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>What?</h2>
        <h1>This is Element1 dude</h1>
        {/* {this.someOtherFunc} */}
        <span>
          <button>This is a button</button>
        </span>
      </React.Fragment>
    );
  }
}
