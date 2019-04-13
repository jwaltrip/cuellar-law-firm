import React, { Component } from 'react';
import "./ServicesPage.css";
import TitleBanner from '../Banners/TitleBanner';

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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7362460811178!2d-97.74909978469177!3d30.273095381799763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50b7ef4debd%3A0xdbd7b04b5d1639df!2sLaw+Office+of+Michaela+D.+Cuellar!5e0!3m2!1sen!2sus!4v1555117063767!5m2!1sen!2sus" width="600" height="450" frameborder="0" style= {{border:"0"}} allowfullscreen></iframe>




      </div>
    );
  }
}

export default ServicesPage;