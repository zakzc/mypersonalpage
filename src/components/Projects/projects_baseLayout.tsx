import React from "react";
// comps
import GeneralHeader from "../views/generalHeader";
import Timeline from "./projects_Timeline";
import Footer from "../views/footer";
// ui
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// assets
import profileImage from "../../assets/img/project.jpg";

const Projects: React.FC = () => {
  // * data
  const headerTitle: string = "Projects";

  return (
    <Container fluid style={{ backgroundColor: "#eaeaea",
        maxWidth: "1400px"}}>
      <Row>
        <GeneralHeader
          imageRef={profileImage}
          headerTitle={headerTitle}
          sideButton={true}
          headerTextColor={"#4f6d7a"}
          headerTextBackground={"rgba(79,109,122, 0.8)"}
        />
      </Row>
      <Timeline />
      <Footer />
    </Container>
  );
};

export default Projects;
