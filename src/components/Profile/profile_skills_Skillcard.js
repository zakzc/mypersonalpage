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

const SkillCard = ({ skill, i }) => {
  // Data used in the component
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

  const StarSection = ({ skillLevel }) => (
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
        backgroundColor: "#0093E9",
        backgroundImage:
          "linear-gradient(312deg, #FFFFFF 0%, #6284FF 26%, #FF0000 90%)",
        clipPath: "polygon(49% 0, 100% 0, 96% 100%, 4% 100%, 0 0)",
      }}
    >
      <img src={imageList[i]} alt={skill.alt} style={{ opacity: "0.5" }} />
    </div>
  );

  return (
    <>
      <div className="card">
        <div className="card-header">
          <ImageSection />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{skill.skillSet}</span>
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
