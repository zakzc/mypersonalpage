import React from "react";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  const Credits = () => (
    <>
      <p>
        The effects and animations on this page are either mine or they were
        found on{" "}
        <a
          style={{ textDecoration: "none", color: "whiteSmoke" }}
          href="https://freefrontend.com/"
        >
          {" "}
          Free frontend
        </a>
        , which is a great source for references. The ones here were tweaked and
        adjusted to fit this project. These include:{" "}
        <a
          style={{ textDecoration: "none", color: "whiteSmoke" }}
          href="https://www.bootdey.com/snippets/view/bs4-my-experience-timeline"
        >
          Timeline from Projects page and{" "}
        </a>
        <a
          style={{ textDecoration: "none", color: "whiteSmoke" }}
          href="https://codepen.io/eyupucmaz/pen/oNbeXOb"
        >
          Card layout from Profile page
        </a>{" "}
      </p>
    </>
  );
  const Refs = () => (
    <>
      <p>
        For more information about me, check:{" "}
        <span>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://github.com/zakzc"
          >
            my Github page
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://www.linkedin.com/in/zakzangrando/"
          >
            My LinkedIn profile.
          </a>
        </span>
      </p>
      <p>
        Icons come from:{" "}
        <span>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://linearicons.com/"
          >
            Linea icons
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://www.flaticon.com/"
          >
            Flat icon
          </a>
        </span>
      </p>
      <p>
        Images used include:{" "}
        <span>
          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://unsplash.com/photos/DJ7bWa-Gwks"
          >
            Photo by ian dooley on Unsplash (profile) and{" "}
          </a>

          <a
            style={{ textDecoration: "none", color: "whiteSmoke" }}
            href="https://unsplash.com/photos/4UGmm3WRUoQ"
          >
            photo by Sigmund on Unsplash (projects).
          </a>
        </span>
      </p>
    </>
  );

  return (
    <>
      <div>
        <Row style={{ backgroundColor: "#4f6d7aff", color: "#f3f3f3ff" }}>
          <Col></Col>
          <Col>
            <Refs />
          </Col>
          <Col>
            <Credits />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};
export default Footer;
