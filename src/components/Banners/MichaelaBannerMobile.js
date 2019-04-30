import React from 'react';
import "./MichaelaBannerMobile.css";
import MichaelaImg from "../../assets/MikaelaCuellar.jpg";
import FitText from "react-fittext";

// did the styles this way so i could import the image and use it as the background-image property
const styles = {
  imgBanner: {
    backgroundImage: `url(${MichaelaImg})`,
    backgroundPosition: "65% center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    width: "100%",
    height: 600,
  }
};

const MichaelaBannerMobile = (props) => {
  return (
    <div className="mobile-homepage-banner">
      {/* banner image of Michaela */}
      <div className="michaela-img" style={styles.imgBanner}>{' '}</div>
      <div className="container mobile-text py-3">
        <FitText compressor={1.5} minFontSize={20} maxFontSize={24}>
          <h2 className="mobile-text-1">Jail Release</h2>
        </FitText>
        <FitText compressor={1.5} minFontSize={20} maxFontSize={24}>
          <h2 className="mobile-text-1">Phones Answered 24 hours a Day</h2>
        </FitText>
        <FitText compressor={1.5} minFontSize={20} maxFontSize={24}>
          <h2 className="mobile-text-2">Contact Our Office Today</h2>
        </FitText>
        <FitText compressor={1.5} minFontSize={20} maxFontSize={24}>
          <h2 className="mobile-text-3">(512)-765-6341</h2>
        </FitText>
        <FitText compressor={2} minFontSize={16} maxFontSize={22}>
          <h2 className="mobile-text-4">Se Habla Español</h2>
        </FitText>
      </div>
    </div>
  );
};

export default MichaelaBannerMobile;