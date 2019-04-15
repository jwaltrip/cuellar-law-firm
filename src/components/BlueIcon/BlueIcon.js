import React from 'react';
import "./BlueIcon.css";

/**
 *  Pass in the FontAwesome classname for the <i> tag on the fontawesome.com website
 *
 *  ex. <BueIcon iconClass="fas fa-user fa-2x" />
 *
 */

const BlueIcon = (props) => {
  return (
    <div className="blue-icon-container">
      <i className={`${props.iconClass}`}></i>
    </div>
  );
};

export default BlueIcon;