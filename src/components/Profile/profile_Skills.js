import React from "react";
// comps
import SubTitle from "../views/subTitle";
import SkillCard from "./profile_skills_Skillcard";
// data
import myData from "../../data/myData.json";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
          // <Skill_Cards skill={skill} i={i} key={i} />
        ))}
      </div>
    </div>
  );

  const SkillSet = () => {
    return (
      <>
        <Row style={{ marginTop: "150px" }}>
          <SubTitle color={"#eaeaeaff"} subTitle={"Skill set"} />
          <Col></Col>
          <Col xs={10} sm={10} md={10} lg={10}>
            <Row style={{ marginTop: "150px" }}>
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
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #4f6d7a 0%, #5ea5b8 100%)",
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
