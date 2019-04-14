import React, { Component } from 'react';
import TitleBanner from '../Banners/TitleBanner';

class ContactUsPage extends Component {
  render() {
    return (
      <div>
        <div>
        <TitleBanner color="Gray" title="Contact Us"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7362460811178!2d-97.74909978469177!3d30.273095381799763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50b7ef4debd%3A0xdbd7b04b5d1639df!2sLaw+Office+of+Michaela+D.+Cuellar!5e0!3m2!1sen!2sus!4v1555117063767!5m2!1sen!2sus" width="600" height="450" frameborder="0" style= {{border:"0"}} allowfullscreen></iframe>
        
        <div className="container">
                  <div className="section-content">
                      <div>
                          <div className="row">
                              <div className="col-md-6">
                                  <div role="form" className="wpcf7" id="wpcf7-f4804-p3411-o1" lang="en-US" dir="ltr">
                                      <div className="screen-reader-response"></div>
                                      <form action="/?page_id=3411#wpcf7-f4804-p3411-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                          <div style={{display: "none"}}>
                                              <input type="hidden" name="_wpcf7" value="4804"/>
                                              <input type="hidden" name="_wpcf7_version" value="4.9.1"/>
                                              <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4804-p3411-o1"/>
                                              <input type="hidden" name="_wpcf7_container_post" value="3411"/>
                                          </div>
                                          <p>Your Name (required)
                                              <br/>
                                              <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/></span> </p>
                                          <p>Your Email (required)
                                              <br/>
                                              <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/></span> </p>
                                          <p>Subject
                                              <br/>
                                              <span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false"/></span> </p>
                                          <p>Your Message
                                              <br/>
                                              <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </p>
                                          <p>
                                              <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit"/><span className="ajax-loader"></span></p>
                                          <div className="wpcf7-response-output wpcf7-display-none"></div>
                                      </form>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <h3 className="md-heading">Get In Touch</h3>
                                  <div className="md-text-block">Contact my office today at (512)-765-6341 or email me to schedule a <span style={{color: "#000000"}}>complimentary</span>&nbsp;consultation and take the first step toward receiving the professional representation you deserve. This could be the most important call of your life.</div>
                                  <div className="clearfix" style={{height:"40px"}}></div>
                                  <h3 className="md-heading">Contact Me</h3>
                                  <div className="md-text-block">
                                      <strong>Address:</strong>
                                      &nbsp;507 W 10th St. &nbsp;Austin, TX 78701 
                                      <strong>Phone:</strong>
                                      &nbsp;(512)-765-6341 
                                      <strong>Email:MichaeladCuellar@gmail.com</strong>
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

export default ContactUsPage;