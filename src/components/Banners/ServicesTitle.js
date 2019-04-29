import React from 'react';
import "./ServicesTitle.css";
import ServicesBgImg from "../../assets/services-bg3.jpg";

const bannerStyle = {
  backgroundImage: "black",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  width: "100%"
};

const ServicesTitle = (props) => {
  return (
    <div className="services-title-container" style={bannerStyle}>
      <div className="services-title-text">Services Offered</div>
    </div>
  );
};

export default ServicesTitle;