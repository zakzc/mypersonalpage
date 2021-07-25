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
    <Col xs={12} sm={6} md={6} lg={6} style={{ backgroundColor: "#4f6d7aff" }}>
      <Row>
        <div
          className="d-flex justify-content-end  mt-4"
          style={{ fontSize: 40, color: "#f3f3f3ff" }}
        >
          Zak
        </div>
      </Row>
      <Row>
        <div
          style={{ marginTop: "25vh" }}
          className="d-flex justify-content-end"
        >
          <Button
            variant="dark"
            style={{
              fontSize: 40,
              backgroundColor: "#4f6d7aff",
              color: "#f3f3f3ff",
              border: "none",
            }}
            onClick={() => handleViewProfile()}
          >
            Profile
          </Button>
        </div>
      </Row>
    </Col>
  );

  const LightSide = () => (
    <Col xs={12} sm={6} md={6} lg={6} style={{ backgroundColor: "#f3f3f3ff" }}>
      <Row>
        <div className="mt-4" style={{ fontSize: 40, color: "#4f6d7aff" }}>
          Zangrando
        </div>
      </Row>
      <Row>
        <div style={{ marginTop: "25vh" }}>
          <Button
            variant="light"
            style={{
              fontSize: 40,
              backgroundColor: "#f3f3f3ff",
              border: "none",
              color: "#4f6d7aff",
            }}
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
