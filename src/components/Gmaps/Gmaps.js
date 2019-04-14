import React from 'react';

const Gmaps = (props) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7362460811178!2d-97.74909978469177!3d30.273095381799763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50b7ef4debd%3A0xdbd7b04b5d1639df!2sLaw+Office+of+Michaela+D.+Cuellar!5e0!3m2!1sen!2sus!4v1555117063767!5m2!1sen!2sus"
      width="600"
      height="450"
      frameBorder="0"
      style={{border: "0"}}
      allowFullScreen
      title="Cuellar Law Location"
    >
    
    </iframe>
  );
};

export default Gmaps;