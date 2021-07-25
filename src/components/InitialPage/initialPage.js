import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// animation
import { AnimatePresence, motion } from "framer-motion";
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
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    return () => {
      setShowArrow(true);
    };
    // Cleans up setShowArrow, so that it doesn't run in the background
    // as another component is rendered
  }, []);

  setTimeout(() => {
    setShowArrow(false);
  }, 4000);

  const handleViewProfile = () => {
    history.push("/profile");
  };

  const handleViewProjects = () => {
    history.push("/projects");
  };
  // animation
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };
  const pageTransition = {
    transition: "linear",
    ease: "easeInOut",
    duration: 0.8,
  };

  const ButtonContentProfile = ({ arrow, text }) => (
    <>
      {showArrow ? (
        <AnimatePresence>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <img
              src={arrow}
              style={{
                height: "80px",
              }}
              alt="go to profile page"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <span>{text}</span>
        </motion.div>
      )}
    </>
  );

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
            <ButtonContentProfile arrow={arrowLeft} text={"Profile"} />
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
            <ButtonContentProfile arrow={arrowRight} text={"Projects"} />
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
