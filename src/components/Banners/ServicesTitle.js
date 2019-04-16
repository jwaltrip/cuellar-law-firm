import React from 'react';
import "./ServicesTitle.css";
import ServicesBgImg from "../../assets/services-bg3.jpg";

const bannerStyle = {
  backgroundImage: `url("${ServicesBgImg}")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% auto",
  backgroundAttachment: "scroll",
  width: "100%"
};

const ServicesTitle = (props) => {
  return (
    <div className="services-title-container" style={bannerStyle}>
      <div className="services-title-text">Services Offered</div>
      <div className="shadow"></div>
    </div>
  );
};

export default ServicesTitle;