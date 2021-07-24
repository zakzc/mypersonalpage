import React from "react";
// comps
import GeneralHeader from "../generalComponents/generalHeader";
// ui
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// assets
import profileImage from "../../assets/img/profileImage.jpg";

const Projects = () => {
  // * data
  // header data
  const polygon = "0 0, 100% 0, 100% 84%, 0% 100%";
  const headerTitle = "Projects";

  return (
    <Container fluid>
      <Row>
        <GeneralHeader
          polygon={polygon}
          imageRef={profileImage}
          headerTitle={headerTitle}
          sideButton={true}
        />
      </Row>
    </Container>
  );
};
export default Projects;
