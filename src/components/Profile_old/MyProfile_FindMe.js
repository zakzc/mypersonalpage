import React from "react";
///
import myData from "../../data/myData.json";

const myContact = myData.contact;

export default function MyProfile_FindMe() {
  return (
    <div id="findMe">
      <h2 className="whiteTitles">Find me</h2>
      <ul>
        {myContact.map((c, i) => (
          <li key={i}>
            <div className="links" key={i}>
              <a href={c.url}>
                <span>{c.description}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
