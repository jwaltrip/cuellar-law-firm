import React from 'react';
import "./ProfileTitle.css";
import ProfileBgImg from "../../assets/profile-bg1.jpg";
import FitText from "react-fittext";

const bannerStyle = {
  backgroundColor: "#007bff",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  width: "100%"
};

const ProfileTitle = (props) => {
  return (
    <div className="profile-title-container" style={bannerStyle}>
      <div className="container">
        <div className="profile-title-text">
          <FitText compressor={1} minFontSize={38} maxFontSize={46}><h2 className="profile-title-text">Attorney Profile</h2></FitText>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
