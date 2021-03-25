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
      <div>
        <div className="card-container">
          <div className="card">
            <div className="card-head">
              <div className="card-detail">
                <h2>Title of the card</h2>
              </div>
            </div>
            {/* <span class="back-text">Shadow</span> */}
            <div className="card-body">
              <div>
                <span className="section-title">
                  Sub-Title
                  <span className="badge">Or sub-title?</span>
                </span>
                <span className="card-caption">
                  Here we describe something, can it be a little longer text?
                  Because I need it longer
                </span>
              </div>
              <div className="properties">
                <span className="whatIUsed">
                  <h4>I used:</h4>
                  <ul className="ul-size">
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                  </ul>
                </span>
                <span className="card_links">
                  <h4>Link to source</h4>
                  <ul className="ul-links">
                    <li>d</li>
                    <li>e</li>
                    <li>f</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
