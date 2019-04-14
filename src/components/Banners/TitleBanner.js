
import React, { Component } from 'react';


class TitleBanner extends Component {
  render() {
    return (
        <div className="title">x
            <div class="page-section content-full shadow-inside-top-bottom" style={{backgroundColor: `${this.props.color}`, backgroundPosition:"top center", backgroundRepeat:"no-repeat", backgroundSize:"cover;", backgroundAttachment:"scroll", width: "100%"}}>
          
                <div class="section-mask" style= {{backgroundColor: "rgba(0, 0, 0, 0.6)"}}></div>
                  <div class="section-content">
                      <div>
                        <h2 class="md-heading textaligncenter" style={{ color: "#ffffff", fontSize:"48px", lineHeight: "300px", fontWeight:"500", width: "100%"}}>{this.props.title}</h2>
                      </div>
                  </div>
                
              </div>
        </div>

    );
  }
}

export default TitleBanner;