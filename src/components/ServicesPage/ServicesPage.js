import React, { Component } from "react";
import "./ServicesPage.css";
// import TitleBanner from "../Banners/TitleBanner";
import Gmaps from "../Gmaps/Gmaps";
import BlueIcon from "../BlueIcon/BlueIcon";
import ServicesTitle from "../Banners/ServicesTitle";
// import FitText from "react-fittext";

class ServicesPage extends Component {
  render() {
    return (
      <div>
        {/*<TitleBanner color="black" title="Services Offered" />*/}
        <ServicesTitle />
        
        <div className="container services-container">
          <div className="row">
            {/* left half */}
            <div className="col-lg-6">
              {/* Criminal section */}
              <div className="service-section">
                <div className="icon-container">
                  <BlueIcon iconClass="fas fa-user fa-2x" />
                </div>
                <div className="service-list">
                  <h3 className="service-title">Criminal</h3>
                  <ul>
                    <li><em>Theft cases</em></li>
                    <li><em>Drug offenses</em></li>
                    <li><em>Robbery cases</em></li>
                    <li><em>Property crimes</em></li>
                    <li><em>Weapons charges</em></li>
                    <li><em>Warrants / Walkthrough</em></li>
                    <li><em>Aggravated offenses</em></li>
                    <li><em>Sex Crime Offenses</em></li>
                    <li><em>Motion to Revoke Probation</em></li>
                    <li><em>Driving while Intoxicated</em></li>
                    <li><em>BWI (boating while intoxicated)</em></li>
                    <li><em>Misdemeanors and Felony cases</em></li>
                    <li><em>Assault and Family Violence cases</em></li>
                  </ul>
                </div>
              </div>
              
            </div>

            {/* right half */}
            <div className="col-lg-6">
              {/* Family section */}
              <div className="service-section">
                <div className="icon-container">
                  <BlueIcon iconClass="fas fa-user-friends fa-2x" />
                </div>
                <div className="service-list">
                  <h3 className="service-title">Family</h3>
                  <ul>
                    <li><em>Divorce</em></li>
                    <li><em>Modifications</em></li>
                    <li><em>Protective Orders</em></li>
                    <li><em>Child Custody / Visitation</em></li>
                    <li><em>Child Support / Spousal Maintenance</em></li>
                  </ul>
                </div>
              </div>
              
              {/* Personal injury section */}
              <div className="service-section">
                <div className="icon-container">
                  <BlueIcon iconClass="fas fa-ambulance fa-2x" />
                </div>
                <div className="service-list">
                  <h3 className="service-title">Personal Injury</h3>
                  <ul>
                    <li><em>Dog Bites</em></li>
                    <li><em>Auto Accidents</em></li>
                  </ul>
                </div>
              </div>
              
              {/* Jail Release */}
              <div className="service-section">
                <div className="icon-container">
                  <BlueIcon iconClass="fas fa-gavel fa-2x" />
                </div>
                <div className="service-list">
                  <h3 className="service-title">Jail Release</h3>
                  <ul>
                    <li><em>Phones are answered 24 hours a day</em></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Blockquote section */}
          <div className="container mt-5 mb-4">
            <div className="section-content">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="md-heading textaligncenter quote-title">OUR MISSION</h2>
                    <blockquote className="style-3 quote">
                      {/* quote icon */}
                      <i className="fas fa-quote-right fa-3x"></i>
                      <h3 style={{ color: "#000000", textAlign: "center", marginLeft: "30px" }}>
                        <strong>
                          ASSURING YOU GET THE JUSTICE YOU DESERVE FROM A
                          KNOWLEDGEABLE ATTORNEY AT A REASONABLE COST
                        </strong>
                      </h3>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gmaps />
      </div>
    );
  }
}

export default ServicesPage;
