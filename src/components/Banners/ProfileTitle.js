import React from 'react';
import "./ProfileTitle.css";
import ProfileBgImg from "../../assets/profile-bg1.jpg";

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
      <div className="profile-title-text">Attorney Profile</div>
    </div>
  );
};

export default ProfileTitle;
