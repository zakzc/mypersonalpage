import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
///
//import star from "../../assets/svg/circle.svg";
import star from "../../assets/svg/star.svg";
// list of images
import html_Logo from "../../assets/svg/html5.svg";
import css_Logo from "../../assets/svg/css3.svg";
import p_Logo from "../../assets/svg/php.svg";
import py_Logo from "../../assets/svg/python.svg";
import j_Logo from "../../assets/svg/js.svg";
import react_Logo from "../../assets/svg/react.svg";
import node_Logo from "../../assets/svg/node.svg";
import jest_Logo from "../../assets/svg/jest.svg";
import u_Logo from "../../assets/svg/uxui.svg";

const SkillCard = ({ skill, index }) => {
  // * data
  const imageList = [
    html_Logo,
    css_Logo,
    p_Logo,
    py_Logo,
    j_Logo,
    react_Logo,
    node_Logo,
    jest_Logo,
    u_Logo,
  ];

  // * view
  const StarSection = ({ skillLevel, index }) => (
    <>
      {skillLevel.level.map((k) => (
        <Col key={k} style={{ alignItems: "center" }}>
          <img
            style={{
              width: "15px",
            }}
            src={star}
            alt="star"
          />
        </Col>
      ))}
    </>
  );

  const ImageSection = () => (
    <div
      style={{
        backgroundImage:
          "linear-gradient( 110.3deg,  rgba(79,109,122,1) 8.8%, rgba(127,146,166,1) 95.1% )",
      }}
    >
      <img src={imageList[index]} alt={skill.alt} style={{ opacity: "0.8v" }} />
    </div>
  );

  return (
    <>
      <div className="card">
        <div className="card-header">
          <ImageSection />
        </div>
        <div className="card-body">
          <span className={index % 2 === 0 ? "tag tag-pink" : "tag tag-purple"}>
            {skill.skillSet}
          </span>
          <h4> {skill.language}</h4>
          {/* <p> {skill.language}</p> */}
          <div className="user-info">
            <Row>
              <StarSection skillLevel={skill} />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
