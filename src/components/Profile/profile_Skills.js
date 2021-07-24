import React from "react";
// comps
import SubTitle from "../generalComponents/subTitle";
// data
import myData from "../../data/myData.json";
// ui
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
///
//import star from "../../assets/svg/circle.svg";
import star from "../../assets/svg/star.svg";

const Skills = () => {
  // * data
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
  //   const star = star;
  const mySkills = myData.skills;

  // * view

  const StarSection = ({ skill }) => (
    <>
      {skill.level.map((i) => (
        <Col key={i} style={{ alignItems: "center" }}>
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

  const SkillCard = ({ skill, i }) => (
    <Card
      key={i}
      style={{
        width: "10rem",
        margin: "10px",
        backgroundColor: "#eaeaeaff",
      }}
    >
      <Card.Img variant="top" src={imageList[i]} alt={skill.alt} />
      <Card.Body>
        <Card.Title>{skill.skillSet}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {skill.language}
        </Card.Subtitle>
        <Card.Text>
          <Row>
            <StarSection skill={skill} />
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );

  const SkillList = () => (
    <>
      {mySkills.map((skill, i) => (
        <SkillCard skill={skill} i={i} />
      ))}
    </>
  );

  const SkillSet = () => {
    return (
      <>
        <Row style={{ marginTop: "195px" }}>
          <SubTitle color={"#eaeaeaff"} subTitle={"Skill set"} />
          <Col></Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <Row>
              <SkillList />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <Row
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundImage:
          //   "linear-gradient(to right bottom, #4f6d7aff, #c0d6dfff)",
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)",
          //   transform: "skewY(-4deg)",
          position: "relative",
          marginLeft: "0",
        }}
      >
        <SkillSet />
      </Row>
    </>
  );
};
export default Skills;
