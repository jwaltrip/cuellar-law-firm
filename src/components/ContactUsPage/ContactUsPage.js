import React, { Component } from 'react';
import axios from "axios";
import { Alert } from "reactstrap";
import Gmaps from "../Gmaps/Gmaps";
import "./ContactPage.css";

class ContactUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      alertBanner: '',
      showBanner: false,
      error: null
    };
  }
  
  handleInputChange = (e) => {
    e.preventDefault();
    
    this.setState({ [e.target.name]: e.target.value });
  };
  
  // TODO add send email template and integrate email provider
  // TODO add basic email validation
  handleSubmit = (e) => {
    e.preventDefault();
    
    let { name, email, subject, message } = this.state;
    // trim leading and trailing whitespace
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();
    
    if (name || email) {
      axios.post('/api/email/send', { name, email, subject, message })
        .then(res => {
          console.log(res);
          
          if (res.data.result.success || res.data.success) {
            this.setState({
              name: '',
              email: '',
              subject: '',
              message: '',
              alertBanner: 'Message successfully sent!',
              showBanner: true,
              error: null,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            error: error,
            alertBanner: 'An error occurred. Please contact us by phone or email.'
          });
        });
    } else {
      // else, some form fields were missing
      this.setState({
        showBanner: true,
        alertBanner: 'You must provide both Email and Name fields',
        error: true
      })
    }
  };
  
  toggleBanner = () => {
    this.setState({ showBanner: !this.state.showBanner });
  };
  
  render() {
    // logic to determine wheter banner should be green or red (success or fail)
    let bannerColor;
    if (this.state.error) {
      bannerColor = "danger";
    } else {
      bannerColor = "success";
    }
    
    return (
      <div>
        <Gmaps />
        
        <div className="container contact-form">
          <div className="row ml-1">
            <Alert color={bannerColor} isOpen={this.state.showBanner} toggle={this.toggleBanner}>
              {this.state.alertBanner}
            </Alert>
          </div>
          <div className="row">
            {/* Left side contact form */}
            <div className="col-md-6 mb-4">
              <form>
                <div className="form-group">
                  <label className="contact-label" htmlFor="name">YOUR NAME (REQUIRED)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label" htmlFor="email">YOUR EMAIL (REQUIRED)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label" htmlFor="name">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label" htmlFor="name">YOUR MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    cols="40"
                    rows="10"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  onClick={this.handleSubmit}
                >
                  Send
                </button>
              </form>
            </div>
            
            {/* right side contact form */}
            <div className="col-md-6">
              <h3 className="contact-header">Get In Touch</h3>
              <p className="contact-desc">
                Contact my office today at (512)-765-6341 or email me to schedule a
                complimentary consultation and take the first step toward receiving the professional
                representation you deserve. This could be the most important call of your life.
              </p>
              <br/>
              <h3 className="contact-header">Contact Us</h3>
              <p className="contact-desc">
                <strong>Address:</strong> &nbsp; 507 W 10th St.  Austin, TX 78701
                <br/>
                <strong>Phone:</strong> &nbsp; (512)-765-6341
                <br/>
                <strong>Fax:</strong> &nbsp; (512)-597-0727
                <br/>
                <strong>Email:</strong> &nbsp; <a href="mailto:michaeladcuellar@gmail.com">MichaeladCuellar@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsPage;