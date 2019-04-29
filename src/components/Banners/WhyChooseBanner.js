import React from 'react';
import "./WhyChooseBanner.css";
import FitText from "react-fittext";
import GavelImg from "../../assets/gable1.png";

const WhyChooseBanner = (props) => {
  return (
    <div className="why-container">
      <div className="section-mask">
        {/* Title */}
        <div className="container">
          <div className="row mt-5">
            <FitText compression={3.7} minFontSize={25} maxFontSize={35}>
              <h2 className="why-title">Why choose Michaela D. Cuellar</h2>
            </FitText>
          </div>
          
          <div className="row mb-5">
            <div className="col-md-6">
              {/* Quick Response section */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option1">
                  Quick Response
                  <div className="subtext">Jail Release Phones are answered 24 hours a day.</div>
                </div>
                <i className="fas fa-mobile-alt fa-2x icon icon-mobile"></i>
              </div>
              
              {/* payment plans sectino */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option2">
                  Payment Plans
                  <div className="subtext">Installment payment plans available.</div>
                </div>
                <i className="far fa-money-bill-alt fa-2x icon icon-dollar"></i>
              </div>
  
              {/* payment plans sectino */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option3">
                  Bilingual
                  <div className="subtext">Se Habla Español.</div>
                </div>
                <i className="fas fa-cog fa-2x icon icon-gear"></i>
              </div>
              
            </div>
            <div className="col-md-6 d-none d-md-inline">
              <img src={GavelImg} className="img-fliud" alt="gavel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBanner;