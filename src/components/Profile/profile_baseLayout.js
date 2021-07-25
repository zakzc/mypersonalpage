import React from "react";
// comps
import Education from "./profile_Education";
import Footer from "../views/footer";
import GeneralHeader from "../views/generalHeader";
import Skills from "./profile_Skills";
// ui
// import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// assets
import profileImage from "../../assets/img/profileImage.jpg";

const Profile = () => {
  const polygon = "0 0, 100% 0, 100% 84%, 0% 100%";
  const headerTitle = "Profile";

  return (
    <>
      <GeneralHeader
        polygon={polygon}
        imageRef={profileImage}
        headerTitle={headerTitle}
        sideButton={false}
        headerTextColor={"#4f6d7aff"}
        headerTextBackground={"rgba(243, 243, 243, 0.9)"}
      />
      <Education />
      <Skills />
      <Footer />
    </>
  );
};
export default Profile;
