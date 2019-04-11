import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row">
    
                <div className="col-md-4 column">
                    <div id="text-2" className="widget widget_text">
                        <h3 className="widget-title">Get in touch</h3>
                        <div className="textwidget">
                            <p style={{ fontFamily: 'Gotham;', textAlign: 'center;' }}>
                                <strong>A Lawyer skilled and knowledgeable inCriminal,
                                </strong>
                                <strong>Family and Personal Injury cases.
                                </strong>
    
                                <strong>Schedule a Consultation
                                </strong>
                                <strong>: (512)-765-6341</strong>
                                <img className="alignnone size-medium wp-image-4801" src="https://www.michaelacuellar.com/wp-content/uploads/2014/08/whitelogo-300x95.png" alt="whitelogo" width="300" height="95"/>
                            </p>
                        
                            <Link rel="me" to="https://www.avvo.com/attorneys/78701-tx-michaela-cuellar-4590314.html?cm_mmc=Avvo-_-Avvo_Badge-_-Micro-_-4590314">
                            <img alt="Avvo - Rate your Lawyer. Get Free Legal Advice." id="avvo_badge" src="https://www.avvo.com/assets/microbadge.png"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
    
                <div className="col-md-4 column">
                    <div id="pages-2" className="widget widget_pages">
                        <h3 className="widget-title">Pages</h3>
                        <ul>
                            <li className="page_item page-item-4859"><Link to="/profile">Attorney Profile</Link></li>
                            <li className="page_item page-item-3411"><Link to="/contact">Contact Us</Link></li>
                            <li className="page_item page-item-3426 current_page_item"><Link to="/home">Home</Link></li>
                            <li className="page_item page-item-3415"><Link to="/services">Services Offered</Link></li>
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


