import React from "react";
import { useHistory } from "react-router-dom";
// animation
import { motion } from "framer-motion";
// assets
import arrowLeft from "../../assets/svg/arrow-left-circle.svg";
import arrowRight from "../../assets/svg/arrow-right-circle.svg";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const InitialPage = () => {
  // * data
  const history = useHistory();

  const handleViewProfile = () => {
    history.push("/profile");
  };

  const handleViewProjects = () => {
    history.push("/projects");
  };

  // * view
  // animation
  const pageVariantsArrow = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransitionArrow = {
    transition: "linear",
    duration: 4,
    repeat: 2,
  };

  const Arrow = ({ arrow }) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsArrow}
      transition={pageTransitionArrow}
    >
      <img
        src={arrow}
        style={{
          height: "80px",
        }}
        alt="go to profile page"
      />
    </motion.div>
  );

  // render
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
      {/* <div style={{ position: "absolute", marginRight: "25%" }}>
        <Arrow arrow={arrowLeft} />
      </div> */}
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
          {/* <div style={{ position: "absolute", marginLeft: "25%" }}>
            <Arrow arrow={arrowRight} />
          </div> */}
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
