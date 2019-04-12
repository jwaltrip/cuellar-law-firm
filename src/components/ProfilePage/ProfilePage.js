import React, { Component } from 'react';
import "./ProfilePage.css"
import TitleBanner from '../Banners/TitleBanner';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <TitleBanner color="blue" title="Attorney Profile"/>
        <div className="container">
    <div className="section-content">
        <div>
            <div className="clearfix" style={{height: "40px"}}></div>
            <h3 className="md-heading textaligncenter" style={{ color:"#111111", fontSize: '40px', lineHeight:'48px', fontWeight:"600"}}>
              <p></p>
              <p>Attorney Profile</p>
              <p></p></h3>
            <h3 className="md-heading textaligncenter" style={{color: '#111111', fontSize: '18px', lineHeight: "18px", fontWeight:"300"}}>
              <br></br>
            </h3>
            <div className="clearfix" style={{ height: "40px"}}></div>
            <div className="md-team preview-circle">
                <div className="row">
                    <div className="col-md-12 item">
                        <div className="md-member">
                            <div className="member-image"><img width="500" height="500" src="https://www.michaelacuellar.com/wp-content/uploads/2014/08/RTACP_7778_2296-500x500.jpg" className="member-image" alt="" srcset="https://www.michaelacuellar.com/wp-content/uploads/2014/08/RTACP_7778_2296-500x500.jpg 500w, https://www.michaelacuellar.com/wp-content/uploads/2014/08/RTACP_7778_2296-150x150.jpg 150w, https://www.michaelacuellar.com/wp-content/uploads/2014/08/RTACP_7778_2296-1000x1000.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" />
                            </div>
                            <div className="member-info"><span className="member-name">Michaela D. Cuellar</span><span className="member-role">Attorney at Law</span></div>
                            <div className="member-social">
                                <a className="email" href="mailto:michaeladcuellar@gmail.com" title="email" target="_self"><i className="far fa-envelope"></i></a>
                                <a className="facebook" href="https://www.facebook.com/pages/The-Law-Office-of-Michaela-D-Cuellar/199276020262438 " title="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a className="linkedin" href="http://www.linkedin.com/pub/michaela-cuellar/9b/ba0/76" title="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a className="yelp" href="http://www.yelp.com/biz/the-law-office-of-michaela-d-cuellar-austin-2" title="yelp" target="_blank"><i className="fab fa-yelp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p style={{textAlign: "center"}}>Michaela D. Cuellar is a 2008 Magna Cum Laude graduate of Texas State University receiving her Bachelors of Science in Criminal Justice and a Minor in Forensic Psychology. In the fall of 2010 Michaela began her journey of law school at Thurgood Marshall School of Law. Throughout her law school career, Michaela excelled in her classes, received several CALI Awards for distinguished achievements and was on the Dean’s list every semester. Michaela graduated in the top third of her class Cum Laude in 2013. She is licensed to practice law by the State Bar of Texas. Michaela has been in private practice since 2013 and offers legal service in Criminal law, Personal Injury and Family Law. Michaela is a young and aggressive attorney who represents each one of her clients with the greatest degree of commitment and dedication, while striking to achieve the best possible outcome. Professional Associations and Memberships: American Bar Association Texas Young Lawyers Association Bar Admissions Texas Bar 2013. Member of the Austin Criminal Defense Lawyers Association since 2015.</p>
        </div>
    </div>
</div>
     


    </div>
    );
  }
}

export default ProfilePage;