import React from "react";
///
import myData from "../../data/myData.json";
///
import personalApp from "../../assets/img//Personal_meteor_work.png";
import pythonApp from "../../assets/img/PythonCarGame.png";

const myProjects_2 = myData.projects_2;
const ProjectImageList = [personalApp, pythonApp];

export default function MyProjects_Portfolio() {
  return (
    <div className="projects">
      {myProjects_2.map((p, i) => (
        <div key={i} className="card-container">
          <div className="card">
            <div className="card-head">
              <div className="card-detail">
                <h2>{p.name}</h2>
              </div>
              <li className="crop">
                <img
                  id="projectImage"
                  src={ProjectImageList[i]}
                  alt={p.alt}
                ></img>
              </li>
            </div>
            {/* <span class="back-text">Shadow</span> */}
            <div className="card-body">
              <div>
                <span className="badge">About the project</span>
                <span className="card-caption">{p.describe}</span>
              </div>
              <div className="properties">
                <span className="whatIUsed">
                  <h4>{p.tech}</h4>
                </span>
                <span className="card_links">
                  <h4>
                    <a href={p.link} className="ul-links">
                      Link to source code or online application
                    </a>
                  </h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}
