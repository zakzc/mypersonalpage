import React from "react";
// comps
import GoHomeButton from "../generalComponents/goHomeButton";
// assets
import profileImage from "../../assets/img/profileImage.jpg";
// ui
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";

const HeroHeader = () => {
  const HeaderPhoto = () => (
    <div
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: `url(${profileImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath: "polygon(0 0, 100% 0, 100% 84%, 0% 100%)",
      }}
    ></div>
  );

  const HeaderTitle = () => (
    <div
      style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        overflow: "hidden",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          display: "block",
          fontSize: "60px",
          fontWeight: "400",
          color: "#5ea5b8ff",
          backgroundColor: "rgba(243, 243, 243, 0.7)",
        }}
      >
        Profile
      </h1>
    </div>
  );

  return (
    <Container fluid xs={12} sm={12} md={12} lg={12}>
      <HeaderPhoto />
      <GoHomeButton />
      <HeaderTitle />
    </Container>
  );
};
export default HeroHeader;
