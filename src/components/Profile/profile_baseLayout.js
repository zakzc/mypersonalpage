import React from "react";
// comps
import Education from "./profile_Education";
import HeroHeader from "./profile_heroHeader";
import Skills from "./profile_Skills";
// ui
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

const Profile = () => {
  return (
    <Container fluid xs={12} sm={12} md={12} lg={12}>
      <HeroHeader />
      <Education />
      <Skills />
    </Container>
  );
};
export default Profile;
