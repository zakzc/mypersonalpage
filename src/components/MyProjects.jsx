import React, { Component } from "react";
import myData from "../data/myData.json";
import diaryApp from "../img/DiaryApptake1.png";
import typerApp from "../img/TyperTake1.png";
import personalApp from "../img/Personal_meteor_work.png";
import pythonApp from "../img/PythonCarGame.png";

const myProjects = myData.projects;
const ProjectImageList = [diaryApp, typerApp, personalApp, pythonApp];

export default class CV extends Component {
  render() {
    console.log(myProjects);
    return (
      <React.Fragment>
        <div id="projects">
          <h2>Previous projects</h2>
          {myProjects.map((p, i) => (
            <div key={i}>
              <div className="card">
                <h3> {p.name} </h3>
                <br />
                <div className="projectImage">
                  <img src={ProjectImageList[i]} alt={p.alt}></img>
                </div>
                <br />
                <br />
                <div className="projectText">
                  <p>{p.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
