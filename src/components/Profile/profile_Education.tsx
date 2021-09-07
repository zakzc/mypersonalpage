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

const Education: React.FC = () => {
  const school = myData.education;

  const EducationList: React.FC = () => (
    <div id="educationContainer">
      {school.map((course, i) => (
        <StyledList
          key={i}
          title={course.title}
          text={course.description}
          level={course.level}
        />
      ))}
    </div>
  );

  interface StyleListProps {
    key: number,
    title: string,
    text: string,
    level: string,
  }

  const StyledList: React.FC<StyleListProps> = ({ title, text }) => (
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
        backgroundColor: "#eaeaea",
        backgroundRepeat: "repeat",
      }}
    >
      <Row>
        <div id="myEducation">
          <SubTitle color={"#7A5C4F"} subTitle={"Learning Path"} />
          <EducationList />
        </div>
      </Row>
    </Container>
  );
};
export default Education;
