import React from 'react'
// ui
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer: React.FC = (): any => {
    const Credits: React.FC = (): any => (
        <>
            <p>
                The effects and animations on this page are either mine or they were found on{' '}
                <a className="linkItem" href="https://freefrontend.com/">
                    {' '}
                    Free frontend
                </a>
                , which is a great source for references. The ones here were tweaked and adjusted to fit this project.
                These include:{' '}
                <a className="linkItem" href="https://www.bootdey.com/snippets/view/bs4-my-experience-timeline">
                    Timeline
                </a>{' '}
                that is used in the portfolio page.
            </p>
        </>
    )

    const Refs: React.FC = (): any => (
        <>
            <p>
                For more information about me, check:{' '}
                <span>
                    <a className="linkItem" href="https://github.com/zakzc">
                        my Github page
                    </a>
                </span>{' '}
                and{' '}
                <span>
                    <a className="linkItem" href="https://www.linkedin.com/in/zakzangrando/">
                        My LinkedIn profile.
                    </a>
                </span>
            </p>
            <p>
                Icons come from:{' '}
                <span>
                    <a className="linkItem" href="https://linearicons.com/">
                        Linea icons
                    </a>
                </span>{' '}
                and{' '}
                <span>
                    <a className="linkItem" href="https://www.flaticon.com/">
                        Flat icon
                    </a>
                    . Some are hand-drawn by me.
                </span>
            </p>
            <p>
                Images used include: Photo by{' '}
                <a href="https://unsplash.com/@thepaintedsquare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Jessica Lewis
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/s/photos/bullet-journal-computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </p>
        </>
    )

    return (
        <>
            <Row className="footerContainer" style={{ padding: 30, maxWidth: '1250px', color: '#527689' }}>
                {/* <div className="separator"></div> */}
                <Col>
                    <Refs />
                </Col>
                <Col>
                    <Credits />
                </Col>
            </Row>
        </>
    )
}
export default Footer
