import React, { Component } from "react";
import "./ProfilePage.css";
// import TitleBanner from "../Banners/TitleBanner";
import ProfileTitle from "../Banners/ProfileTitle";
import ProfileImg from "../../assets/michaela-profile.jpg";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        {/*<TitleBanner color="#06b9dd" title="Attorney Profile" />*/}
        <ProfileTitle />

        <div className="container">
          <div className="section-content">
            <div>
              <h2 className="md-heading textaligncenter profile-header-text">
                Michaela D. Cuellar
              </h2>
              <div className="profile-header-sub-text">Attorney at Law</div>

              <div className="md-team preview-circle">
                <div className="row">
                  <div className="col-md-12 item">
                    <div className="md-member">
                      <div className="member-image mb-4">
                        <img
                          src={ProfileImg}
                          className="member-image img-fluid"
                          alt="Michaela D. Cuellar"
                        />
                      </div>
                      
                      {/* social media links */}
                      <div className="member-social mb-4">
                        <a
                          className="profile-email"
                          href="mailto:michaeladcuellar@gmail.com"
                          title="email"
                          target="_self"
                        >
                          <i className="fas fa-envelope fa-2x" />
                        </a>
                        <a
                          className="profile-facebook"
                          href="https://www.facebook.com/pages/The-Law-Office-of-Michaela-D-Cuellar/199276020262438 "
                          title="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f fa-2x" />
                        </a>
                        <a
                          className="profile-linkedin"
                          href="http://www.linkedin.com/pub/michaela-cuellar/9b/ba0/76"
                          title="linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in fa-2x" />
                        </a>
                        <a
                          className="profile-yelp"
                          href="http://www.yelp.com/biz/the-law-office-of-michaela-d-cuellar-austin-2"
                          title="yelp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-yelp fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Description */}
              {/*<h3 className="profile-bio-header mt-3">About Me</h3>*/}
              
              <p className="profile-desc mb-3">
                Michaela D. Cuellar is a 2008 Magna Cum Laude graduate of Texas
                State University receiving her Bachelors of Science in Criminal
                Justice and a Minor in Forensic Psychology. In the fall of 2010
                Michaela began her journey of law school at Thurgood Marshall
                School of Law. Throughout her law school career, Michaela
                excelled in her classes, received several CALI Awards for
                distinguished achievements and was on the Dean’s list every
                semester.
              </p>
              <p className="profile-desc mb-3">
                Michaela has been in private practice since 2013 and
                offers legal service in Criminal law, Personal Injury and Family
                Law. Michaela is a young and aggressive attorney who represents
                each one of her clients with the greatest degree of commitment
                and dedication, while striking to achieve the best possible
                outcome.
              </p>
              <p className="profile-desc mb-5">
                Professional Associations and Memberships: American Bar
                Association Texas Young Lawyers Association Bar Admissions Texas
                Bar 2013. Member of the Austin Criminal Defense Lawyers
                Association since 2015.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
