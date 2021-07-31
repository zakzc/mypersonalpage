import React from "react";
import { useHistory } from "react-router-dom";
// animation
import { motion } from "framer-motion";
// assets
import arrowLeft from "../../assets/svg/arrow-left-circle.svg";
import arrowRight from "../../assets/svg/arrow-right-circle.svg";
// image
import HeroBackgroundImage from "../../assets/img/backgroundImage.jpg";
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
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: {
        delay: 1,
        duration: 7,
        repeat: "Infinity",
        repeatType: "reverse",
      },
    },
    final: {
      opacity: 1,
    },
  };

  const buttonVariance = { hover: { scale: 1.3 } };

  const Arrow = ({ arrow }) => (
    <motion.div
      initial="initial"
      animate="animate"
      exit="final"
      variants={pageVariantsArrow}
      transition="transition"
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

  const ButtonText = ({ text }) => (
    <motion.div variants={buttonVariance} whileHover="hover">
      {text}
    </motion.div>
  );

  // render
  const DarkSide = () => (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={6}
      style={{ backgroundColor: "rgba(79, 109, 122, 0.50)" }}
      onClick={() => handleViewProfile()}
    >
      <Row>
        <div
          className="d-flex justify-content-end  mt-4"
          style={{ fontSize: 40, color: "#f3f3f3" }}
        >
          Zak
        </div>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              position: "absolute",
              marginLeft: "5%",
              marginTop: "18%",
            }}
          >
            <Arrow arrow={arrowLeft} />
          </div>
        </Col>
        <Col>
          <div
            style={{ marginTop: "25vh" }}
            className="d-flex justify-content-end"
          >
            <Button
              variant="dark"
              style={{
                fontSize: 40,
                backgroundColor: "transparent",
                color: "#f3f3f3",
                border: "none",
              }}
              onClick={() => handleViewProfile()}
            >
              <ButtonText text={"Profile"} />
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  );

  const LightSide = () => (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={6}
      style={{ backgroundColor: "rgba(243, 243, 243, 0.70)" }}
      onClick={() => handleViewProjects()}
    >
      <Row>
        <div className="mt-4" style={{ fontSize: 40, color: "#4f6d7aff" }}>
          Zangrando
        </div>
      </Row>
      <Row>
        <Col>
          <div style={{ marginTop: "25vh" }}>
            <Button
              variant="light"
              style={{
                fontSize: 40,
                backgroundColor: "transparent",
                border: "none",
                color: "#4f6d7aff",
              }}
              onClick={() => handleViewProjects()}
            >
              <ButtonText text={"Project"} />
            </Button>{" "}
          </div>
        </Col>
        <Col>
          <div
            style={{
              position: "absolute",
              marginRight: "5%",
              marginTop: "18%",
            }}
          >
            <Arrow arrow={arrowRight} />
          </div>
        </Col>
      </Row>
    </Col>
  );

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${HeroBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // width: "100vw",
        // height: "100vh",
      }}
    >
      <Row className="vh-100">
        <DarkSide />
        <LightSide />
      </Row>
    </Container>
  );
};
export default InitialPage;
