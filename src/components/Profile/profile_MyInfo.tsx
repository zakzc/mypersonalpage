import React from 'react'
// data
import myData from '../../data/myData.json'
// UI
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/triggerBrowserReflow';
// svg
import coffeeCup from '../../assets/svg/coffee.svg'

const ProfileMain: React.FC = () => {
    // * data
    const myText = myData.aboutMe

    const MyInfo: React.FC = () => (
        <Col xs={10} sm={10}>
            <div className="column column--left">
                <div className="story-title">
                    <div className="story-title--first-line">
                        <div className="title-text text--normal" style={{ color: '#7A5C4F' }}>
                            About me
                        </div>
                    </div>
                    <div className="story-title--second-line"></div>
                </div>
                <div className="story-content">
                    <div className="story-column column--first">
                        {myText.map((text, index) => (
                            <div className="text--capitalize-first" key={index} style={{ color: '#527689' }}>
                                <p>{text.paragraph}</p> <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Col>
    )

    const SideNote: React.FC = () => (
        <Col xs={10} sm={10}>
            <div className="column column--right ">
                <div className="author">
                    <div className="name">Side Notes</div>
                    <div className="footnote">Some extra info</div>
                </div>

                <div className="paragraph">
                    <br />
                    <p className="text--capitalize-first">Heavy consumer of coffee</p>
                    <img src={coffeeCup} alt="coffee cut" style={{ width: '90px' }} />
                </div>
            </div>
        </Col>
    )

    //* view
    return (
        <div className="news-page__section stories">
            <div className="story story--main">
                <Col xs={12} sm={9}>
                    <MyInfo />
                </Col>
                <Col xs={12} sm={3}>
                    <SideNote />
                </Col>
            </div>
        </div>
    )
}
export default ProfileMain
