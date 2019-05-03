import React, { Component } from 'react';
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Home Page test</h1>
          <hr />
        </div>
        
            <div className="section-content">
                <div className="textaligncenter">
                    <h2 className="md-heading textaligncenter">ASSURING YOU GET THE JUSTICE YOU DESERVE</h2>
                </div>
            </div>
    
        
          <div className="section-content">
            <div>
              <h2 className="md-heading textaligncenter">Services Offered </h2>
              <h5 className="md-heading textaligncenter">Skilled and Knowledgeable</h5>
              <div className="clearfix" style={{height:"40px"}}></div>
              <div className="row">
                <div className="col-md-4">
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon" data-delay="250">
                        <div className="md-icon style-circle fill"><i className="entypo-user" style={{borderColor:"#09d9e9", backgroundColor:"#09d9e9", color:"#ffffff"}} data-color="#ffffff" data-bg="#09d9e9" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text">
                            <h4>Personal Injury</h4>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4">
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon" data-delay="250">
                        <div className="md-icon style-circle fill"><i className="icon-legal" style={{borderColor:"#09d9e9", backgroundColor:"#09d9e9", color:"#ffffff"}} data-color="#ffffff" data-bg="#09d9e9" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                        <div className="box-text">
                            <h4>Criminal</h4>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4">
                    <div className="md-box-icon animate fadeInUp align-left advanced-icon" data-delay="500">
                        <div className="md-icon style-circle fill"><i className="entypo-users" style={{borderColor:"#09d9e9", backgroundColor:"#09d9e9", color:"#ffffff"}} data-color="#ffffff" data-bg="#09d9e9" data-bg-hover="#09d9e9" data-color-hover="#ffffff"></i></div>
                          <div className="box-text">
                            <h4>Family</h4>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="clearfix" style={{height: "60px"}}></div>
            </div>
        </div>
      
      
          <div className="section-content" style={{ backgroundColor: "#7FFFD4", height: "90px", padding: "20px"}}>
                <div>
                    <div className="md-cta button-large">
                        <div className="cta-content">
                            <h2><span style={{color: "black"}}>Call To Schedule Your Consultation Today</span></h2>
                        </div>
                        <div className="cta-button"><a href="https://www.michaelacuellar.com/?page_id=3411" className="md-button large style-2 with-icon" _blank="" style={{borderColor:"black", color:"black",}} data-color="blue" data-color-hover="#34495e"><span className="lbl"></span><i className="lineicon-small58"></i>SCHEDULE NOW </a></div>
                    </div>
                </div>
            </div>
            <div className="section-mask" style={{backgroundColor:"rgba(44, 62, 80, 0.9)"}}></div>
                    <div className="section-content">
                        <div>
                            <h2 className="md-heading textaligncenter" style={{backgroundColor: "Gray", color:"#ffffff", fontSize:"48px", lineHeight:"56px", fontWeight:"300"}}>Why choose Michaela D. Cuellar</h2>
                            <div className="clearfix hidden-sm hidden-xs" style={{height:"40px"}}><div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="clearfix" style={{height:"90px"}}></div>
                                    <div className="md-box-icon animate fadeInLeft align-right simple-icon" data-delay="250">
                                        <div className="md-icon style-normal"><i className="entypo-mobile" style={{color:"#ffffff;"}}></i></div>
                                        <div className="box-text">
                                            <h4 style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Quick&nbsp;Response&nbsp;</span></h4>
                                            <p style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Jail release phones are answered 24 hours a day.</span></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="clearfix" style={{height:"30px"}}></div>
                                    <div className="md-box-icon animate fadeInLeft align-right simple-icon" data-delay="750">
                                        <div className="md-icon style-normal"><i className="lineicon-banknote" style={{color:"#ffffff"}}></i></div>
                                        <div className="box-text">
                                            <h4 style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Payment Plans</span></h4>
                                            <p style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Installment payment plans available.</span></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="clearfix" style={{height:"30px"}}></div>
                                    <div className="md-box-icon animate fadeInLeft align-right simple-icon" data-delay="500">
                                        <div className="md-icon style-normal"><i className="lineicon-settings3" style={{color: "#ffffff"}}></i></div>
                                        <div className="box-text">
                                            <h4 style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Bilingual</span></h4>
                                            <p style={{textAlign: "right"}}><span style={{color: "#ffffff"}}>Se habla español.</span></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-6 hidden-sm hidden-xs textaligncenter"><img src="https://www.michaelacuellar.com/wp-content/uploads/2014/06/gable1.png" class="md-single-image animate fadeInDownBig" data-delay="679" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        
      </div>
    );
  }
}

export default HomePage;