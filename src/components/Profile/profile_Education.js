import React from "react";
// comps
import SubTitle from "../views/subTitle";
// icon
import EducationBackground from "../../assets/svg/files.svg";
//ui
//import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myData from "../../data/myData.json";

const Education = () => {
  const school = myData.education;

  const EducationList = () => (
    <>
      {school.map((course, i) => (
        <StyledList
          key={i}
          title={course.title}
          text={course.description}
          level={course.level}
        />
      ))}
    </>
  );

  const StyledList = ({ title, text, level }) => (
    <section className="dl-blurbs">
      <dl>
        <dt>{title}</dt>
        <dd>{text}</dd>
      </dl>
    </section>
  );

  // * view
  return (
    <Container
      fluid
      className="my-auto"
      style={{
        background: `url(${EducationBackground})`,
        backgroundSize: "125px 175px",
        backgroundColor: "#f3f3f3",
        backgroundRepeat: "repeat",
      }}
    >
      <Row>
        <div id="myEducation">
          <SubTitle color={"#4f6d7aff"} subTitle={"Learning Path"} />
          <EducationList />
        </div>
      </Row>
    </Container>
  );
};
export default Education;
