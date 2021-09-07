import React from "react";
// import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
///
//import star from "../../assets/svg/circle.svg";
import star from "../../assets/svg/star.svg";
// list of images
import html_Logo from "../../assets/svg/html5.svg";
import css_Logo from "../../assets/svg/css3.svg";
import p_Logo from "../../assets/svg/php.svg";
import py_Logo from "../../assets/svg/python.svg";
import j_Logo from "../../assets/svg/js.svg";
import react_Logo from "../../assets/svg/react.svg";
import node_Logo from "../../assets/svg/node.svg";
import jest_Logo from "../../assets/svg/jest.svg";
import u_Logo from "../../assets/svg/uxui.svg";

interface SkillCardProps {
    skill:{
      skillSet: string,
      language: string[],
      alt: string,
      level: any,
    }, 
    index: number, 
    key: number,
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  // * data
  const imageList = [
    html_Logo,
    css_Logo,
    p_Logo,
    py_Logo,
    j_Logo,
    react_Logo,
    node_Logo,
    jest_Logo,
    u_Logo,
  ];
  // * view

  interface StarSectionProps {
    skillLevel: {level: number[]},
  }

  const StarSection: React.FC<StarSectionProps> = ({ skillLevel }) => (
    <Row style={{ alignItems: "center" }}>
      {skillLevel.level.map((k: number) => (
        <Col key={k} style={{ alignItems: "center" }}>
          <img
            style={{
              width: "15px",
            }}
            src={star}
            alt="star"
          />
        </Col>
      ))}
    </Row>
  );

  const ImageSection: React.FC = () => (
    <div>
      <img
        src={imageList[index]}
        alt={skill.alt}
        style={{ opacity: "0.8", height: "40%" }}
      />
    </div>
  );

  const CardComponent: React.FC = () => (
    <>
      <div className="row">
        <div className="col-sm-4">
          <div className="card text-white card-has-bg click-col">
            <ImageSection />
            <div className="card-img-overlay d-flex flex-column">
              <div className="card-body">
                <span
                  className={index % 2 === 0 ? "tag tag-even" : "tag tag-odd"}
                >
                  {skill.skillSet}
                </span>
                <h4 className="card-title mt-5">{skill.language}</h4>
              </div>
              <div className="card-footer">
                <div className="media">
                  <StarSection skillLevel={skill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <CardComponent />
    </>
  );
};

export default SkillCard;
