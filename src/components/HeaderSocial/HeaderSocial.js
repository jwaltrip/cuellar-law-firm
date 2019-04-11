import React, { Component } from 'react';
import "./HeaderSocial.css";

class HeaderSocial extends Component {
  render() {
    return (
      <div className="TopHeader">
        <header className="width-full height-60 attachment-scroll border-4 scroll-resize scroll-transparent">
		
        <div className="header-top">
        <div className="header-slogan mr-auto ml-3">Michaela D. Cuellar Attorney at Law </div>				<div className="float-right">
        <div className="header-social social-links">
          
            <a className="facebook" href="https://www.facebook.com/pages/The-Law-Office-of-Michaela-D-Cuellar/199276020262438 " title="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
          
            <a className="linkedin" href="http://www.linkedin.com/pub/michaela-cuellar/9b/ba0/76" title="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a>

            <a className="yelp" href="http://www.yelp.com/biz/the-law-office-of-michaela-d-cuellar-austin-2" title="yelp" target="_blank"><i className="fab fa-yelp"></i></a>
          
            <a className="email mr-3" href="mailto:michaeladcuellar@gmail.com" title="email" target="_self"><i className="far fa-envelope"></i></a>

        </div>
            <div className="header-search">
                <form method="get" action="https://www.michaelacuellar.com/">
                    <fieldset>
                        <input type="text" name="s" value="" placeholder="Search..."/>
                    </fieldset>
                </form>
            </div>				
        </div>
    </div>
</header>
      </div>
    );
  }
}

export default HeaderSocial;

