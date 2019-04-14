import React, { Component } from 'react';
import "./ServicesPage.css";
import TitleBanner from '../Banners/TitleBanner';
import Gmaps from "../Gmaps/Gmaps";

class ServicesPage extends Component {
  render() {
    return (
      <div>
        <TitleBanner color="black" title="Services Offered"/>
        <div className="container">
    <div className="section-content">
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon animated" data-delay="0">
                        <div className="md-icon style-circle"><i className="lineicon-user12" style={{ borderColor: 'rgb(9, 217, 233)', color: 'rgb(9, 217, 233)', backgroundColor: 'transparent',}} data-color="#09d9e9" data-bg="transparent" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text">                                           
                            <h3><strong style={{ color: '#000000' }}>Criminal</strong></h3>
                            <ul className="text">
                                <li><em>Theft cases</em></li>
                                <li><em>Drug offenses</em></li>
                                <li><em>Robbery cases</em></li>
                                <li><em>Property Crimes</em></li>
                                <li><em>Weapons Charges</em></li>
                                <li><em>Warrants/Walkthrough</em></li>
                                <li><em>Aggravated Offenses</em></li>
                                <li><em>Sex Crime Offenses</em></li>
                                <li><em>Motion to Revoke Probation</em></li>
                                <li><em>Driving while Intoxicated</em></li>
                                <li><em>BWI(boating while intoxicated)</em></li>
                                <li><em>Misdemeanors and Felony cases</em></li>
                                <li><em>Assault and Family Violence cases</em></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-6">
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon animated" data-delay="300">
                        <div className="md-icon style-circle"><i className="entypo-users" style={{ borderColor: '#09d9e9', color: '#09d9e9' }} data-color="#09d9e9" data-bg="transparent" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text"> 
                            <h3><strong style={{ color: "#000000"}}>Family</strong></h3>
                            <ul className="text">
                                <li><em>Divorce</em></li>
                                <li><em>Modifications</em></li>
                                <li><em>Protective Orders</em></li>
                                <li><em>Child Custody/Visitation</em></li>
                                <li><em>Child Support/Spousal Maintenance</em></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon animated" data-delay="0">
                        <div className="md-icon style-circle"><i className="icon-legal" style={{ borderColor: '#09d9e9', color: '#09d9e9' }} data-color="#09d9e9" data-bg="transparent" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text">
                            <h3><strong style={{ color: "#000000"}}>Personal Injury</strong></h3>
                            <ul className="text">
                                <li><i>Dog Bites&nbsp;</i></li>
                                <li><i><i>Auto Accident</i></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon animated" data-delay="300">
                        <div className="md-icon style-circle"><i className="icon-legal" style={{ borderColor: '#09d9e9', color: '#09d9e9' }} data-color="#09d9e9" data-bg="transparent" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text">
                            <h3><strong style={{ color: "#000000"}}>Jail Release</strong></h3>
                            <ul className="text">
                                <li>Phones are answered 24 hours a day</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-6">
                </div>
            </div>
            <div className="clearfix" style={{ height: "60px"}}></div>
        </div>
    </div>
</div>

<div className="container">
    <div className="section-content">
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="md-heading textaligncenter">OUR MISSION</h2>
                    <blockquote className="style-3">
                        <h3 style={{color: "#000000", textAlign: "center"}}><strong>ASSURING YOU GET THE JUSTICE YOU DESERVE FROM A KNOWLEDGEABLE ATTORNEY AT A REASONABLE COST.</strong></h3>
                    </blockquote>
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