import React from 'react'
// comps
import Education from './profile_Education'
import Footer from '../views/footer'
import GeneralHeader from '../views/generalHeader'
import Skills from './profile_Skills'
// ui
import Container from 'react-bootstrap/Container'
// assets
import AboutMe from './profile_MyInfo'
// svg
import Computer from '../../assets/svg/Computer.svg'

const Profile: React.FC = () => {
    // const polygon = "0 0, 100% 0, 100% 84%, 0% 100%";
    const headerTitle = 'Profile'

    return (
        <Container className="news-page notebook">
            <GeneralHeader headerTitle={headerTitle} sideButton={false} />
            <AboutMe />
            <img src={Computer} alt="computer drawing" style={{ width: '90px' }} />
            <Education />
            <Skills />
            <Footer />
        </Container>
    )
}
export default Profile
