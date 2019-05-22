import React, { Component } from 'react';
import axios from "axios";
import { Alert } from "reactstrap";
import isEmail from 'validator/lib/isEmail';
import isEmpty from "../../utils/isEmpty";
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
  
  // a single function to update all the text fields on the contact page
  // NOTE: you must add a "name" attribute to the input fields and name it the same
  // as the variable names in the state
  handleInputChange = (e) => {
    e.preventDefault();
    
    this.setState({ [e.target.name]: e.target.value });
  };
  
  // submit function for the contact page
  handleSubmit = (e) => {
    e.preventDefault();
    
    let { name, email, subject, message } = this.state;
    // trim leading and trailing whitespace
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();
  
    // check to see if both EMAIL and NAME fields are empty
    // if so, show error banner and dont sent email
    if (isEmpty(name) || isEmpty(email)) {
      if (isEmpty(name) && isEmpty(email)) {
        this.setState({
          error: true,
          alertBanner: 'Error: you must enter your Name and Email Address',
          showBanner: true,
        });
        return;
      }
      // check to see if NAME field is empty
      // if so, show error banner and dont sent email
      if (isEmpty(name)) {
        this.setState({
          error: true,
          alertBanner: 'Error: you must enter your Name',
          showBanner: true,
        });
        return;
      }
      // check to see if EMAIL field is empty
      // if so, show error banner and dont sent email
      if (isEmpty(email)) {
        this.setState({
          error: true,
          alertBanner: 'Error: you must enter your Email',
          showBanner: true,
        });
        return;
      }
    }
    // else if, email is not proper format
    // check to see if email entered is correct email format
    // if not, show error message and don't sent email
    else if (!isEmail(email)) {
      this.setState({
        error: true,
        alertBanner: 'Error: email must be in valid email format',
        showBanner: true,
      });
      return;
    }
    // else, we have all data needed to send email properly
    else {
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
            showBanner: true,
            alertBanner: 'An error occurred. Please contact us by phone or email',
          });
        });
    }
  };
  
  // toggles the show/hide of the alert banner
  toggleBanner = () => {
    this.setState({
      showBanner: !this.state.showBanner,
      alertBanner: '',
    });
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
        
        {/* Alert banner */}
        <div className="container contact-form">
          <div className="row">
            <div className="col-12 w-100">
              <Alert color={bannerColor} isOpen={this.state.showBanner} toggle={this.toggleBanner}>
                {this.state.alertBanner}
              </Alert>
            </div>
          </div>
          
          {/* Contact Form */}
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
                <strong>Phone:</strong> &nbsp; <a href= "tel:(512)-765-6341">(512)-765-6341</a>
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
