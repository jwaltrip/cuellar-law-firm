import React from 'react';
import "./HomePage.css";

import MichaelaBanner from "../Banners/MichaelaBanner";
import JusticeBanner from "../Banners/JusticeBanner";

class HomePage2 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image of Michaela */}
        <MichaelaBanner />
        <JusticeBanner />
      </div>
    );
  }
}

export default HomePage2;