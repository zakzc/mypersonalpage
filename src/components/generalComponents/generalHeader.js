import React from "react";
// comps
import GoHomeButton from "../generalComponents/goHomeButton";
// assets
import profileImage from "../../assets/img/profileImage.jpg";
// ui
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const GeneralHeader = ({ polygon, imageRef, headerTitle, sideButton }) => {
  // * views
  const HeaderPhoto = () => (
    <div
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: `url(${imageRef})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        clipPath: `polygon(${polygon})`,
      }}
    >
      <Row>
        <Col>{sideButton ? <GoHomeButton /> : null}</Col>
        <Col></Col>
        <Col style={{ paddingTop: "20px" }}>
          <HeaderTitle />
        </Col>
        <Col></Col>
        <Col>{sideButton ? null : <GoHomeButton />}</Col>
      </Row>
    </div>
  );

  const HeaderTitle = () => (
    <h1
      style={{
        textTransform: "uppercase",
        display: "block",
        fontSize: "60px",
        fontWeight: "400",
        color: "#4f6d7aff",
        backgroundColor: "rgba(243, 243, 243, 0.9)",
      }}
    >
      {headerTitle}
    </h1>
  );

  return (
    <>
      <HeaderPhoto />
    </>
  );
};
export default GeneralHeader;
