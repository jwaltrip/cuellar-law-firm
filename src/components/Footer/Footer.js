import React, { Component } from 'react';
import { NavLink as Link } from "react-router-dom";
import "./Footer.css";
import LogoImg from "../../assets/whitelogo-300x95.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
        
            {/* left side of footer */}
            <div className="col-md-6 column mb-5">
              <div id="text-2" className="widget widget_text">
                <h3 className="widget-title">Get in touch</h3>
                <div className="textwidget">
                  <p>
                    A Lawyer skilled and knowledgeable in
                  </p>
                  <p>
                    Criminal, Family and Personal Injury cases.
                  </p>
                  <p>
                    Schedule a Consultation: <a href= "tel:(512)-765-6341">(512)-765-6341</a>
                  </p>
                  <br/>
                  
                  <img className="alignnone size-medium wp-image-4801" src={LogoImg} alt="whitelogo" width="300" height="95" />
                  <br/>
                  <br/>
                  
                  <a rel="me" href="https://www.avvo.com/attorneys/78701-tx-michaela-cuellar-4590314.html?cm_mmc=Avvo-_-Avvo_Badge-_-Micro-_-4590314">
                    <img alt="Avvo - Rate your Lawyer. Get Free Legal Advice." id="avvo_badge" src="https://www.avvo.com/assets/microbadge.png" />
                  </a>
            
                </div>
              </div>
            </div>
            
            {/* Right side of footer */}
            <div className="col-md-6 column mb-4">
              <div id="pages-2" className="widget widget_pages">
                <h3 className="widget-title footer-title">Pages</h3>
                <ul>
                  <li className="page_item">
                    <Link className="page-link" to="/jailrelease">Jail Release</Link>
                  </li>
                  <li className="page_item">
                    <Link className="page-link" to="/profile">Attorney Profile</Link>
                  </li>
                  <li className="page_item">
                    <Link className="page-link" to="/contact">Contact Us</Link>
                  </li>
                  <li className="page_item current_page_item">
                    <Link className="page-link" to="/">Home</Link>
                  </li>
                  <li className="page_item">
                    <Link className="page-link" to="/services">Services Offered</Link>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;


