import React, { Component } from "react";
import myData from "../data/myData.json";

const myContact = myData.contact;

export default class Element2 extends Component {
  render() {
    // console.log(myContact);
    return (
      <React.Fragment>
        <h1>Ahoy from element2 - About me</h1>
        <h2>My contacts</h2>
        <span>
          <button>This is a button</button>
        </span>
        <ul>
          {myContact.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
