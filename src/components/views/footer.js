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
        <a className="linkItem" href="https://freefrontend.com/">
          {" "}
          Free frontend
        </a>
        , which is a great source for references. The ones here were tweaked and
        adjusted to fit this project. These include:{" "}
        <a
          className="linkItem"
          href="https://www.bootdey.com/snippets/view/bs4-my-experience-timeline"
        >
          Timeline from Projects page and{" "}
        </a>
        <a className="linkItem" href="https://codepen.io/eyupucmaz/pen/oNbeXOb">
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
          <a className="linkItem" href="https://github.com/zakzc">
            my Github page
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a
            className="linkItem"
            href="https://www.linkedin.com/in/zakzangrando/"
          >
            My LinkedIn profile.
          </a>
        </span>
      </p>
      <p>
        Icons come from:{" "}
        <span>
          <a className="linkItem" href="https://linearicons.com/">
            Linea icons
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a className="linkItem" href="https://www.flaticon.com/">
            Flat icon
          </a>
        </span>
      </p>
      <p>
        Images used include:{" "}
        <span>
          <a
            className="linkItem"
            href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            photo by Clay Banks (front page),{" "}
          </a>
          <a
            className="linkItem"
            href="https://unsplash.com/photos/DJ7bWa-Gwks"
          >
            Photo by ian dooley on Unsplash (profile) and{" "}
          </a>

          <a
            className="linkItem"
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
      <Row className="footerContainer">
        <div className="separator"></div>
        <Col>
          <Refs />
        </Col>
        <Col>
          <Credits />
        </Col>
      </Row>
    </>
  );
};
export default Footer;
