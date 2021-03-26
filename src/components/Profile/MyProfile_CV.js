import React from "react";
///
import myData from "../../data/myData.json";

const school = myData.education;

export default function MyProfile_CV() {
  return (
    <div id="myEducation">
      <h2 className="whiteTitles">Education</h2>
      <ul className="list">
        {school.map((c, i) => (
          <li className="listItem" key={i}>
            <h3 className="courseTitle">{c.title}</h3>
            <div className="listDescription">
              <p className="courseLevel">Level: {c.level} </p>
              <p className="courseName">Course name: {c.description}</p>
              <p className="courseComplete">Stage of development: {c.stage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
