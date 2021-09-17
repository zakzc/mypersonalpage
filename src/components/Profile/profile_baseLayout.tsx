import React from 'react';
// comps
import Education from './profile_Education';
import Footer from '../views/footer';
import GeneralHeader from '../views/generalHeader';
import Skills from './profile_Skills';
import ProfileMain from './profile_Main';
// ui
// import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
// import Row from "react-bootstrap/Row";
// assets
import profileImage from '../../assets/img/profileImage.jpg';
import AboutMe from './profile_MyInfo';

const Profile: React.FC = () => {
    // const polygon = "0 0, 100% 0, 100% 84%, 0% 100%";
    const headerTitle = 'Profile';

    return (
        <Container className="news-page">
            <GeneralHeader
                // polygon={polygon}
                imageRef={profileImage}
                headerTitle={headerTitle}
                sideButton={false}
                headerTextColor={'#f3f3f3'}
                headerTextBackground={'rgba(243, 243, 243, 0.9)'}
            />
            <AboutMe />
            <Education />
            <Skills />
            <Footer />
            <ProfileMain />
        </Container>
    );
};
export default Profile;
