import React from 'react';
import "./HomePage.css";
// import FitText from "react-fittext";

import MichaelaBanner from "../Banners/MichaelaBanner";
import JusticeBanner from "../Banners/JusticeBanner";
// import BlueIcon from "../BlueIcon/BlueIcon";
import ServicesOffered from "../Banners/ServicesOffered";
import WhyChooseBanner from "../Banners/WhyChooseBanner";
import ApptBanner from "../Banners/ApptBanner";
import Responsive from 'react-responsive';
import MichaelaBannerMobile from "../Banners/MichaelaBannerMobile";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class HomePage2 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image of Michaela */}
        <Default>
          <MichaelaBanner />
        </Default>
        <Mobile>
          <MichaelaBannerMobile />
        </Mobile>
        {/*<JusticeBanner />*/}
        {/* Services Offerred Section */}
        <ServicesOffered />
        <WhyChooseBanner />
        <ApptBanner />
      </div>
    );
  }
}

export default HomePage2;