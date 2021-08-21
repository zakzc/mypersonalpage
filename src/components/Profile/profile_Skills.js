import React from "react";
// comps
import SubTitle from "../views/subTitle";
import SkillCard from "./profile_skills_Skillcard";
// data
import myData from "../../data/myData.json";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// img
import KeyboardImage from "../../assets/img/lightKeyboard.jpg";
///

const Skills = () => {
  // * data
  const mySkills = myData.skills;

  // * view
  const SkillList = () => (
    <div>
      <div className="container">
        {mySkills.map((skill, index) => (
          <SkillCard skill={skill} index={index} key={index} />
        ))}
      </div>
    </div>
  );

  const SkillSet = () => {
    return (
      <>
        <Row style={{ marginTop: "120px", marginBottom: "100px" }}>
          <SubTitle color={"#7A5C4F"} subTitle={"Skill set"} />
          <Col></Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <Row style={{ marginTop: "15px" }}>
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
          backgroundColor: "#4f6d7a",
          backgroundImage: [
            "linear-gradient(135deg, rgba(79, 109, 122, 0.5) 0%, rgba(192, 214, 223, 0.8) 50%, rgba(94, 165, 184, 1) 100%)",
            `url(${KeyboardImage})`,
          ],
          clipPath: "polygon(50% 5%, 100% 0, 100% 95%, 50% 100%, 0 95%, 0 0)",
          position: "relative",
        }}
      >
        <SkillSet />
      </Row>
    </>
  );
};
export default Skills;
