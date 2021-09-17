import React from 'react';
// comps
import SubTitle from '../views/subTitle';
import SkillCard from './profile_skills_Skillcard';
// data
import myData from '../../data/myData.json';
// ui
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
///

const Skills: React.FC = () => {
    // * data
    const mySkills = myData.skills;

    // * view

    const SkillList: React.FC = () => (
        <div className="news-page_section weather">
            <div className="section-divider" title="My Skills"></div>
            {mySkills.map((skill, index) => (
                <SkillCard skill={skill} index={index} key={index} />
            ))}
        </div>
    );

    const SkillSet: React.FC = () => {
        return (
            <>
                <Row>
                    <SubTitle color={'#7A5C4F'} subTitle={'Skill set'} />
                    <Col></Col>
                    <Col xs={10} sm={10} md={10} lg={10}>
                        <Row>
                            <SkillList />
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </>
        );
    };

    return (
        <Container>
            <div>
                <div className="columns-wrapper column--weathers">
                    <SkillSet />
                </div>
            </div>
        </Container>
    );
};
export default Skills;
