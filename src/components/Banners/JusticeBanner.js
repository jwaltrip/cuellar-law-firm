import React from 'react';
import "./JusticeBanner.css";
// I use this to auto-shrink the text for smaller screens
import FitText from "react-fittext";

const JusticeBanner = (props) => {
  return (
    <div className="justice">
      <div className="container">
        {/* this will shrink the text on smaller screens */}
        <FitText compressor={2.7} minFontSize={25}>
          <h2 className="justice-banner">ASSURING YOU GET THE JUSTICE YOU DESERVE</h2>
        </FitText>
      </div>
    </div>
  );
};

export default JusticeBanner;
