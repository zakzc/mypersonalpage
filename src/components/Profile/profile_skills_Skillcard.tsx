import React from 'react'
// import { motion } from "framer-motion";
import Col from 'react-bootstrap/Col'
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
///
//import star from "../../assets/svg/circle.svg";
import star from '../../assets/svg/star.svg'
// list of images
import html_Logo from '../../assets/svg/html5.svg'
import css_Logo from '../../assets/svg/css3.svg'
import p_Logo from '../../assets/svg/php.svg'
import py_Logo from '../../assets/svg/python.svg'
import j_Logo from '../../assets/svg/js.svg'
import react_Logo from '../../assets/svg/react.svg'
import node_Logo from '../../assets/svg/node.svg'
import jest_Logo from '../../assets/svg/jest.svg'
import typeScript_Logo from '../../assets/svg/typescript.svg'
import u_Logo from '../../assets/svg/uxui.svg'
import git_Logo from '../../assets/svg/git.svg'

interface SkillCardProps {
    skill: {
        skillSet: string
        language: string[]
        alt: string
        level: any
    }
    index: number
    key: number
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
        typeScript_Logo,
        u_Logo,
        git_Logo,
    ]
    // * view

    interface StarSectionProps {
        skillLevel: { level: number[] }
    }

    const StarSection: React.FC<StarSectionProps> = ({ skillLevel }) => (
        <Row style={{ alignItems: 'center' }}>
            {skillLevel.level.map((k: number) => (
                <Col key={k} style={{ alignItems: 'center' }}>
                    <img
                        style={{
                            width: '15px',
                        }}
                        src={star}
                        alt="star"
                    />
                </Col>
            ))}
        </Row>
    )

    const ImageSection: React.FC = () => (
        <div>
            <img src={imageList[index]} alt={skill.alt} style={{ width: '90px' }} />
        </div>
    )

    const CardComponent: React.FC = () => (
        <div className="postit" style={{ color: '#527689' }}>
            {/* <Col xs={6} md={4} lg={3}> */}

            <div className="weather_value text_shadow--hot">
                <ImageSection />
            </div>
            <div className="weather_city">{skill.skillSet}</div>
            <StarSection skillLevel={skill} />
            <h4>{skill.language}</h4>

            {/* </Col> */}
        </div>
    )

    return (
        <>
            <div className="news-page_section weather">
                <div className="columns-wrapper column--weathers">
                    <CardComponent />
                </div>
            </div>
        </>
    )
}

export default SkillCard
