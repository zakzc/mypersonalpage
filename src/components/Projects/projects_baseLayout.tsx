import React from 'react'
// comps
import GeneralHeader from '../views/generalHeader'
import Timeline from './projects_Timeline'
import Footer from '../views/footer'
// ui
// import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// assets

const Projects: React.FC = () => {
    // * data
    const headerTitle: string = 'Portfolio'

    return (
        <Container className="news-page notebook">
            <Row>
                <GeneralHeader headerTitle={headerTitle} sideButton={true} />
            </Row>
            <Timeline />
            <Footer />
        </Container>
    )
}

export default Projects
