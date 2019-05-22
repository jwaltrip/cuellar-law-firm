import React from 'react';
import "./CallBanner.css";
import { Button } from "reactstrap";
import FitText from "react-fittext";
import { Link } from "react-router-dom";

class CallBanner extends React.Component {
  
  render() {
    return (
      <div className="schedule-banner2">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <FitText compressor={2.1} minTextSize={25} maxTextSize={34}>
                <h2 className="schedule-text">Phones Answered 24 hours</h2>
              </FitText>
            </div>
            <div className="col-lg-3 pt-2">
              <a href= "tel:(512)-765-6341" className="call-btn">
                <i className="fas fa-phone"></i> &nbsp; CAll NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallBanner;