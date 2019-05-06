import React from "react";
import "./TestEmail.css";

const TestEmail = props => {
  return (
    <div className="email-container">
      <div className="email-header">
        <div className="email-title">
          <h3>New contact form submission!</h3>
          <hr />
        </div>
        
        <div className="email-subject">
          <span className="subject-header">Subject: </span>
          Test sending email from postman
        </div>
        <div className="email-date">
          <span className="date-recieved">recieved </span>
          May 5, 2019 @ 9:29 PM
        </div>
      </div>
      
      <table className="tg">
        <tr>
          <th className="tg-adxo">Name:</th>
          <th className="tg-0lax">Jake Waltrip</th>
        </tr>
        <tr>
          <td className="tg-l2oz">Email:</td>
          <td className="tg-0lax">jake.waltrip.dev@gmail.com</td>
        </tr>
      </table>

      <div className="message-info">
        <div className="message-header">Message:</div>
        <div className="message-container">
          This is a test message sent from postman. Still working???!!!
        </div>
      </div>
    </div>
  );
};

export default TestEmail;
