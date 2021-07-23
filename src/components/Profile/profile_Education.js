import React from "react";
// ui
//import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import myData from "../../data/myData.json";

const Education = () => {
  const school = myData.education;

  const EducationList = () => (
    <>
      {school.map((course, i) => (
        <StyledList key={i} title={course.title} text={course.description} />
      ))}
    </>
  );

  const StyledList = ({ title, text }) => (
    <section className="dl-blurbs">
      <dl>
        <dt>{title}</dt>
        <dd>{text}</dd>
      </dl>
    </section>
  );

  const EducationTitle = () => (
    <h2
      style={{
        textAlign: "right",
        marginTop: "90px",
        color: "#4f6d7aff",
      }}
    >
      Education
    </h2>
  );
  // * view
  return (
    <Container fluid className="my-auto">
      <Row>
        <div id="myEducation">
          <EducationTitle />
          <EducationList />
        </div>
      </Row>
    </Container>
  );
};
export default Education;
