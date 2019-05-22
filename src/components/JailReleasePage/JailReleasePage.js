import React, { Component } from "react";
import "./JailReleasePage.css";
// import TitleBanner from "../Banners/TitleBanner";
import ProfileTitle from "../Banners/ProfileTitle";
import ProfileImg from "../../assets/michaela-profile.jpg";
import CallBanner from "../Banners/CallBanner";

class JailReleasePage extends Component {
  render() {
    return (
      <div>
        {/*<TitleBanner color="#06b9dd" title="Attorney Profile" />*/}
        <ProfileTitle color="#06b9dd" title="Jail Release"/>

        <div className="container">
          <div className="section-content">
            <div>
              <h2 className="md-heading textaligncenter profile-header-text">
              Michaela D. Cuellar
              </h2>
              <div className="profile-header-sub-text">Austin Jail Release Lawyer</div>
              <div className="profile-header-sub-text">Aggressively fighting for your rights!</div>
              <div className="profile-header-sub-text">SERVING TRAVIS COUNTY COURTS</div>
              <div className="profile-header-sub-text">We accept all major credit cards & cash</div>
              <CallBanner/>
              <br></br>
              

              <div className="md-team preview-circle">
                <div className="row">
                  <div className="col-md-12 item">
                    <div className="md-member">
                      
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Description */}
              {/*<h3 className="profile-bio-header mt-3">About Me</h3>*/}
              
              <p className="profile-desc2 mb-3">
              Why should you choose an attorney over a bondsman? 
              We’re affordable, convenient, and will see the case through representation. 
              The goal is to make this a hassle-free process. You supply the information; the office will provide all the work. There are no co-signers required, which means you are not liable should the person not fulfill the conditions of his/her bond. Simply pay a one-time fee for the jail release.

              </p>
              <p className="profile-desc2 mb-3">
              We do not require collateral for the remainder of the bond amount. Do not wait! Unlike a bail bondsman, an attorney can waive magistration, allowing for a quicker processing time from jail. Retaining a jail release attorney gets your friend/loved one out of jail, as well as, begins the process of working on his/her defense. 
              </p>
              <p className="profile-desc2 mb-5">
              It is very important to retain an attorney as soon as possible to avoid unnecessary delays. I will work aggressively with the promise to work efficiently and as quickly as possible on the release of your friend or loved one. 

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JailReleasePage;