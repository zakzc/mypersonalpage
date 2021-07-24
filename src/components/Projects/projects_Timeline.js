import React from "react";
// assets: images
import diaryApp from "../../assets/img/DiaryApptake1.png";
import typerApp from "../../assets/img/TyperTake1.png";
import thisSite from "../../assets/img/thisSite.png";
import flashcards from "../../assets/img/Flashcards.png";
import softTable from "../../assets/img/SoftWrapMobList.png";
import personalApp from "../../assets/img//Personal_meteor_work.png";
import pythonApp from "../../assets/img/PythonCarGame.png";
// comps
import SubTitle from "../generalComponents/subTitle";
// data
import myData from "../../data/myData.json";

const Timeline = () => {
  // * data
  const myProjects = myData.projects.sort((a, b) => (b.year < a.year ? -1 : 1));

  const projectsImages = [
    { name: "diary", image: diaryApp },
    { name: "typer", image: typerApp },
    { name: "current", image: thisSite },
    { name: "flash", image: flashcards },
    { name: "soft", image: softTable },
    { name: "personal", image: personalApp },
    { name: "py", image: pythonApp },
  ];

  // * view
  const ProjectImage = (imageReference) => {
    let imageToShow = projectsImages.filter(
      (i) => i.name === imageReference.imageReference
    );
    return (
      <img
        style={{ width: "200px" }}
        src={imageToShow[0].image}
        alt="project"
      ></img>
    );
  };

  const LineOfTime = ({ project, i }) => (
    <div className="timeline" key={i}>
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <span className="year">{project.year}</span>
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <h5 className="title">{project.name}</h5>
        <p className="description">{project.describe}</p>
        <br />
        <p> {project.tech}</p>
        <a href={project.link}>Link to code</a>
        <br /> <br />
        <ProjectImage imageReference={project.imageRef} />;
      </div>
    </div>
  );

  const ProjectList = () => {
    return (
      <>
        {myProjects.map((project, i) => (
          <LineOfTime project={project} i={i} key={i} />
        ))}
      </>
    );
  };

  return (
    <div className="container">
      <SubTitle color={"#4f6d7a"} subTitle={"Timeline of projects"} />
      <div className="main-timeline">
        <ProjectList />
      </div>
    </div>
  );
};
export default Timeline;
