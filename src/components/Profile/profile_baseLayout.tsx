import React from 'react'
// comps
import Education from './profile_Education'
import Footer from '../views/footer'
import GeneralHeader from '../views/generalHeader'
import Skills from './profile_Skills'
//import ProfileMain from './profile_Main';
// ui
// import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
// import Row from "react-bootstrap/Row";
// assets
import AboutMe from './profile_MyInfo'

const Profile: React.FC = () => {
    // const polygon = "0 0, 100% 0, 100% 84%, 0% 100%";
    const headerTitle = 'Profile'

    return (
        <Container className="news-page notebook">
            <GeneralHeader headerTitle={headerTitle} sideButton={false} />
            <AboutMe />
            <Education />
            <Skills />
            <Footer />
            {/* <ProfileMain /> */}
        </Container>
    )
}
export default Profile
