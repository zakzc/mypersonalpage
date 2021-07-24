import React from "react";
import { useHistory } from "react-router-dom";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const InitialPage = () => {
  // navigation
  const history = useHistory();
  const handleViewProfile = () => {
    history.push("/profile");
  };

  // data
  const handleViewProjects = () => {
    history.push("/projects");
  };

  // * view
  const DarkSide = () => (
    <Col xs={12} sm={6} md={6} lg={6} className="bg-dark text-light">
      <Row>
        <div
          className="d-flex justify-content-end  mt-5"
          style={{ fontSize: 40 }}
        >
          Zak
        </div>
      </Row>
      <Row>
        <div
          style={{ marginTop: "30vh" }}
          className="d-flex justify-content-end"
        >
          <Button
            variant="dark"
            style={{ fontSize: 40 }}
            onClick={() => handleViewProfile()}
          >
            Profile
          </Button>
        </div>
      </Row>
    </Col>
  );

  const LightSide = () => (
    <Col xs={12} sm={6} md={6} lg={6} className="bg-light text-dark">
      <Row>
        <div className="mt-5" style={{ fontSize: 40 }}>
          Zangrando
        </div>
      </Row>
      <Row>
        <div style={{ marginTop: "30vh" }}>
          <Button
            variant="light"
            style={{ fontSize: 40 }}
            onClick={() => handleViewProjects()}
          >
            Projects
          </Button>
        </div>
      </Row>
    </Col>
  );

  return (
    <Container fluid>
      <Row className="vh-100">
        <DarkSide />
        <LightSide />
      </Row>
    </Container>
  );
};
export default InitialPage;
