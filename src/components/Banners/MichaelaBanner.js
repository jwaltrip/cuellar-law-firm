import React from 'react';
import "./MichaelaBanner.css";
import MichaelaImg from "../../assets/MikaelaCuellar.jpg";

// did the styles this way so i could import the image and use it as the background-image property
const styles = {
  imgBanner: {
    backgroundImage: `url(${MichaelaImg})`,
    backgroundPosition: "center 55%",
    maxHeight: 600,
  }
};

const MichaelaBanner = (props) => {
  return (
    <div>
      {/* banner image of Michaela */}
      <div className="michaela-img" style={styles.imgBanner}>
        <p className="img-top-text">Se Habla Español</p>
        <p className="img-middle-text">PHONES ANSWERED 24 HOURS A DAY</p>
        <p className="img-bottom-text">CONTACT OFFICES TODAY (512)-765-6341</p>
      </div>
    </div>
  );
};

export default MichaelaBanner;