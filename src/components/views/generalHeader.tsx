import React from "react";
// comps
import GoHomeButton from "./goHomeButton";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface GeneralHeaderProps {
  imageRef: string,
  headerTitle: string,
  sideButton: string,
  headerTextColor: string,
  headerTextBackground: string,
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  imageRef,
  headerTitle,
  sideButton,
  headerTextColor,
  headerTextBackground,
}): any  => {
  // * views
  const HeaderPhoto: React.FC = () => (
    <div
      style={{
        height: "400px",
        backgroundSize: "cover",
        backgroundImage: `url(${imageRef})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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

  const HeaderTitle: React.FC = () => (
    <h1
      style={{
        textTransform: "uppercase",
        display: "block",
        fontSize: "60px",
        fontWeight: 400,
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
