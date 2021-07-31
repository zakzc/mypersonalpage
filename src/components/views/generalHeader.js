import React from "react";
// comps
import GoHomeButton from "./goHomeButton";
// assets
// import profileImage from "../../assets/img/profileImage.jpg";
// ui
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const GeneralHeader = ({
  polygon,
  imageRef,
  headerTitle,
  sideButton,
  headerTextColor,
  headerTextBackground,
}) => {
  // * views
  const HeaderPhoto = () => (
    <div
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: `url(${imageRef})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //clipPath: `polygon(${polygon})`,
        clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%)",
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
        color: `${headerTextColor}`,
        backgroundColor: `${headerTextBackground}`,
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
