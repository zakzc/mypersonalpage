import React, { Component } from "react";

export default class Element2 extends Component {
  //   someOtherFunc() {
  //     console.log("this is someOtherfunc");
  //   }
  // no state here
  render() {
    return (
      <React.Fragment>
        <h2>What?</h2>
        <h1>Ahoy from element2</h1>
        {/* {this.someOtherFunc} */}
        <span>
          <button>This is a button</button>
        </span>
      </React.Fragment>
    );
  }
}
