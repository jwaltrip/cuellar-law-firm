import React from 'react';
import "./ServicesTitle.css";
import ServicesBgImg from "../../assets/services-bg3.jpg";
import FitText from "react-fittext";


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
      <div className="container">
        <div className="services-title-text">
          <FitText compressor={1} minFontSize={38} maxFontSize={46}><h2 className="services-title-text">Services Offered</h2></FitText>
        </div>
      </div>
    </div>
  );
};

export default ServicesTitle;