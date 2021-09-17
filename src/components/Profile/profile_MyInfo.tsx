import React from 'react';
// data
import myData from '../../data/myData.json';

const ProfileMain: React.FC = () => {
    // * data
    const myText = myData.aboutMe;

    //* view
    return (
        <>
            <div className="news-page__section stories">
                <div className="story story--main">
                    <div className="column column--left">
                        {/* <!--  start: story title        --> */}
                        <div className="story-title">
                            <div className="story-title--first-line">
                                <div className="title-text text--normal" style={{ color: '#4f6d7a' }}>
                                    About me
                                </div>
                            </div>
                            <div className="story-title--second-line"></div>
                        </div>
                        {/* <!--  end: story title        --> */}

                        {/* <!--  start: story content        --> */}

                        <div className="story-content">
                            <div className="story-column column--first">
                                {myText.map((text, index) => (
                                    <div className="text--capitalize-first" key={index}>
                                        <p>{text.paragraph}</p> <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <!--  end: story content        --> */}
                    </div>

                    <div className="column column--right">
                        <div className="author">
                            <div className="name">Side Notes</div>
                            <div className="footnote">Some extra info</div>
                        </div>

                        <div className="paragraph">
                            <br />
                            <p className="text--capitalize-first">Heavy consumer of coffee</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileMain;
