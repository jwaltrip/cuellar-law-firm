import React from 'react';
import "./HomePage.css";
import FitText from "react-fittext";

import MichaelaBanner from "../Banners/MichaelaBanner";
import JusticeBanner from "../Banners/JusticeBanner";
import BlueIcon from "../BlueIcon/BlueIcon";
import ServicesOffered from "../Banners/ServicesOffered";


class HomePage2 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image of Michaela */}
        <MichaelaBanner />
        <JusticeBanner />
        {/* Services Offerred Section */}
        <ServicesOffered />
      </div>
    );
  }
}

export default HomePage2;