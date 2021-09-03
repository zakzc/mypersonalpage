import React from "react";
// comps
import GeneralHeader from "../views/generalHeader.tsx";
import Timeline from "./projects_Timeline";
import Footer from "../views/footer";
// ui
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// assets
import profileImage from "../../assets/img/project.jpg";

const Projects = () => {
  // * data
  // header data
  const polygon = "0 0, 100% 0%, 100% 100%, 0 80%";
  const headerTitle = "Projects";

  return (
    <Container fluid>
      <Row>
        <GeneralHeader
          polygon={polygon}
          imageRef={profileImage}
          headerTitle={headerTitle}
          sideButton={true}
          headerTextColor={"#f3f3f3"}
          headerTextBackground={"rgba(79,109,122, 0.8)"}
        />
      </Row>
      <Timeline />
      <Footer />
    </Container>
  );
};
export default Projects;
