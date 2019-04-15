import React from 'react';
import FitText from "react-fittext";
import BlueIcon from "../BlueIcon/BlueIcon";
import "./ServicesOffered.css";

const ServicesOffered = (props) => {
  return (
    <div className="mt-5 mb-5">
      <div className="title">
        <FitText compressor={3.5} minFontSize={25}>
          <h2 className="services-offered-title">Services Offered</h2>
        </FitText>
        <div className="services-subtitle mt-2">Skilled and Knowledgeable</div>
      </div>
    
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row justify-content-center">
              <BlueIcon iconClass="fas fa-user fa-2x"/>
              <div className="services-icon-text">Personal Injury</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row justify-content-center">
              <BlueIcon iconClass="fas fa-gavel fa-2x"/>
              <div className="services-icon-text">Criminal</div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row justify-content-center">
              <BlueIcon iconClass="fas fa-user-friends fa-2x"/>
              <div className="services-icon-text">Family</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;