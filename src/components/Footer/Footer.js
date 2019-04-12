import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
        
            <div className="col-md-6 column">
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
                    Schedule a Consultation: (512)-765-6341
                  </p>
                  <br/>
                  
                  <img className="alignnone size-medium wp-image-4801" src="https://www.michaelacuellar.com/wp-content/uploads/2014/08/whitelogo-300x95.png" alt="whitelogo" width="300" height="95" />
                  <br/>
                  <br/>
                  
                  <a rel="me" to="https://www.avvo.com/attorneys/78701-tx-michaela-cuellar-4590314.html?cm_mmc=Avvo-_-Avvo_Badge-_-Micro-_-4590314">
                    <img alt="Avvo - Rate your Lawyer. Get Free Legal Advice." id="avvo_badge" src="https://www.avvo.com/assets/microbadge.png" />
                  </a>
            
                </div>
              </div>
            </div>
        
            <div className="col-md-6 column">
              <div id="pages-2" className="widget widget_pages">
                <h3 className="widget-title">Pages</h3>
                <ul>
                  <li className="page_item">
                    <Link className="page-link" to="/profile">Attorney Profile</Link>
                  </li>
                  <li className="page_item">
                    <Link className="page-link" to="/contact">Contact Us</Link>
                  </li>
                  <li className="page_item current_page_item">
                    <Link className="page-link" to="/home">Home</Link>
                  </li>
                  <li className="page_item">
                    <Link className="page-link" to="/services">Services Offered</Link>
                  </li>
                </ul>
              </div>
            </div>
        
            <div className="col-md-4 column">
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;


