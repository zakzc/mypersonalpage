import React from "react";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  const Credits = () => (
    <>
      <span>
        The effects and animations on this page are either mine or they were
        found on
        <a
          style={{ textDecoration: "none", color: "whiteSmoke" }}
          href="https://freefrontend.com/"
        >
          Free frontend
        </a>
        , which is a great source for references. The ones here were tweaked and
        adjusted to fit this project.
      </span>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://www.bootdey.com/snippets/view/bs4-my-experience-timeline"
          >
            Timeline from Projects page
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://codepen.io/eyupucmaz/pen/oNbeXOb"
          >
            Card layout from Profile page
          </a>
        </li>
      </ul>
      <span>Images from: </span>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://unsplash.com/photos/DJ7bWa-Gwks"
          >
            Photo by ian dooley on Unsplash
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://unsplash.com/photos/4UGmm3WRUoQ"
          >
            Project photo: Photo by Sigmund on Unsplash
          </a>
        </li>
      </ul>
    </>
  );
  const Refs = () => (
    <>
      <span>For more information about me, check out:</span>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://github.com/zakzc"
          >
            My Github page
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://www.linkedin.com/in/zakzangrando/"
          >
            My LinkedIn profile
          </a>
        </li>
      </ul>
      <span>Icons come from:</span>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://linearicons.com/"
          >
            Linea icons
          </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://www.flaticon.com/"
          >
            Flat icon
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <footer>
      <Row style={{ backgroundColor: "#4f6d7aff", color: "#f3f3f3ff" }}>
        <Col>
          <Refs />
        </Col>
        <Col>
          <Credits />
        </Col>
      </Row>
    </footer>
  );
};
export default Footer;
