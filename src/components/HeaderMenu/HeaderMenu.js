import React, { Component } from 'react';
import "./HeaderMenu.css";
import LogoImg from "../../assets/newlogo.png";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand
} from 'reactstrap';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          {/* This is the logo */}
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Michaela D. Cuellar - Attorney at Law" />
          </NavbarBrand>
          {/* this is the part of the header the collapses on mobile */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="ml-auto">
              <div className="header-container">
                {/* Home link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/">
                    <div className="header-link-text">Home</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
    
                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/profile">
                    <div className="header-link-text">Attorney Profile</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>

                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/jailrelease">
                    <div className="header-link-text">Jail Release</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Services Offered link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/services">
                    <div className="header-link-text">Services Offered</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text">Contact Us</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderMenu;

/*

<div className="HeaderMenu">
        <div className="header-content" id="header-content">
          <div className="container">
        
            <div id="logo">
              <a href="https://www.michaelacuellar.com" title="Michaela D. Cuellar Attorney at Law">
                <img src="https://www.michaelacuellar.com/wp-content/uploads/2014/08/newlogo.png" alt="" />
              </a>
            </div>
        
            <nav className="header-menu menu-style-1 menu-uppercase-yes submenu-dark">
              <ul id="header-menu" className="menu">
                <li className="menu-item-4849 menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3426 current_page_item simple"><a href="https://www.michaelacuellar.com/">Home</a></li>
                <li className="menu-item-4870 menu-item menu-item-type-post_type menu-item-object-page simple"><a href="https://www.michaelacuellar.com/?page_id=4859">Attorney Profile</a></li>
                <li className="menu-item-4850 menu-item menu-item-type-post_type menu-item-object-page simple"><a href="https://www.michaelacuellar.com/?page_id=3415">Services Offered</a></li>
                <li className="menu-item-4851 menu-item menu-item-type-post_type menu-item-object-page simple"><a href="https://www.michaelacuellar.com/?page_id=3411">Contact Us</a></li>
              </ul>
            </nav>
        
            <a href="#" id="menu-mobile-trigger" className=""></a>
      
          </div>
        </div>
    
        <div className="header-mobile" style={{ display: 'none' }}>
          <div className="container">
        
            <nav className="header-menu-mobile">
              <ul id="header-menu-mobile" className="menu">
                <li id="menu-item-4849" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3426 current_page_item menu-item-4849"><a href="https://www.michaelacuellar.com/">Home</a></li>
                <li id="menu-item-4870" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4870"><a href="https://www.michaelacuellar.com/?page_id=4859">Attorney Profile</a></li>
                <li id="menu-item-4850" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4850"><a href="https://www.michaelacuellar.com/?page_id=3415">Services Offered</a></li>
                <li id="menu-item-4851" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4851"><a href="https://www.michaelacuellar.com/?page_id=3411">Contact Us</a></li>
              </ul>
            </nav>
      
          </div>
        </div>
  
      </div>

 */

