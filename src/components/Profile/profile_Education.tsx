import React from 'react';
// comps
import SubTitle from '../views/subTitle';
// icon
// import EducationBackground from '../../assets/svg/files.svg';
// import paperBack from '../../assets/img/paperBack.jpg';
//ui
//import Col from "react-bootstrap/Col";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import myData from '../../data/myData.json';

const Education: React.FC = () => {
    const school = myData.education;

    interface EducationStyleProps {
        key: number;
        order: number;
        title: string;
        level: string;
        description: string;
    }

    const EducationStyled: React.FC<EducationStyleProps> = ({ order, title, level, description }) => (
        <div className="news-page__section exclusive-story">
            <div className="exclusive-story__marker">{order})</div>
            <div className="exclusive-story__preview">
                <div className="preview-title">
                    <span className="text display--block">{title}</span>s
                </div>
                <div className="preview-content-wrapper">
                    <div className="preview-content">
                        <div className="preview-content--left">{level}</div>
                        <div className="preview-content--right">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    //  <SubTitle color={'#7A5C4F'} subTitle={'Learning Path'} />;
    const EducationList: React.FC = () => (
        <>
            <div id="educationContainer">
                {school.map((course, i) => (
                    <EducationStyled
                        key={i}
                        order={course.order}
                        title={course.title}
                        description={course.description}
                        level={course.level}
                    />
                ))}
            </div>
        </>
    );

    // interface StyleListProps {
    //     key: number;
    //     title: string;
    //     text: string;
    //     level: string;
    // }

    // const StyledList: React.FC<StyleListProps> = ({ title, text }) => (
    //     <section className="dl-blurbs">
    //         <dl>
    //             <dd
    //                 style={{
    //                     fontSize: '2em',
    //                     textDecoration: 'underline',
    //                     textDecorationColor: '#5ea5b8',
    //                 }}
    //             >
    //                 {title}
    //             </dd>
    //             <dd>{text}</dd>
    //         </dl>
    //     </section>
    // );

    // * view
    return (
        <div id="myEducation">
            <SubTitle color={'#7A5C4F'} subTitle={'Learning Path'} />
            <EducationList />
        </div>
    );
};

export default Education;
