import React, { Component } from "react";
import myData from "../data/myData.json";
// import { Link } from "react-router-dom";
// import myImageToDisplay from "../img/grayHouse.svg";

const myContact = myData.contact;

export default class AboutMe extends Component {
  render() {
    // console.log(myContact);
    return (
      <React.Fragment>
        {/* <li>
          <Link to="/">
            <img
              id="houseIcon"
              src={myImageToDisplay}
              alt="back to home page"
            />
          </Link>
        </li> */}
        <div id="about">
          <h1>About me</h1>
          <h2>My contacts</h2>
          <span>
            <button>This is a button</button>
          </span>
          <ul>
            {myContact.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
