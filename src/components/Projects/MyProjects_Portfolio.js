import React from "react";
///
import myData from "../../data/myData.json";
///
import diaryApp from "../../assets/img/DiaryApptake1.png";
import typerApp from "../../assets/img/TyperTake1.png";
import personalApp from "../../assets/img//Personal_meteor_work.png";
import pythonApp from "../../assets/img/PythonCarGame.png";
import thisSite from "../../assets/img/thisSite.png";

const myProjects = myData.projects;
const ProjectImageList = [thisSite, diaryApp, typerApp, personalApp, pythonApp];

export default function MyProjects_Portfolio() {
  return (
    <div id="projects">
      {myProjects.map((p, i) => (
        <div key={i}>
          <div className="card">
            <h2> {p.name} </h2>
            <br />
            <div className="projectImage">
              <a href={p.link}>
                <img src={ProjectImageList[i]} alt={p.alt}></img>
              </a>
            </div>
            <br />
            <br />
            <div className="projectText">
              <h4>{p.tech}</h4>
              <p>{p.describe}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
