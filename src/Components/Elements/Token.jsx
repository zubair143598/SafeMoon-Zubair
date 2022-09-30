import React from "react";
import {FaCat} from 'react-icons/fa';
const Token = () => {
  return (
    <div className="container token">
      <div className="row">
        <div className="col-md-6">
          <p className="aboutus">The token </p>
          <h3>
            The SafeMoon Protocol V2 is a community focused DeFi token that
            forms part of the expanding SafeMoon ecosystem.
          </h3>
          <p>Four simple functions occur during each trade</p>
          
          <h6  data-aos="zoom-in-up">
            <FaCat size={40} className="cat" /> Reflections
            <p className="para4">4% is Redistributed to all existing holder</p>
          </h6>

          <h6 data-aos="zoom-in-up">
            <FaCat size={40} className="cat" /> LP Acquisition
            <p className="para4">3% is added to liquidity</p>
          </h6>

          <h6 data-aos="zoom-in-up">
            <FaCat size={40} className="cat" /> Token Burn
            <p className="para4">2% of tokens are burned</p>
          </h6>

          <h6 data-aos="zoom-in-up">
            <FaCat size={40} className="cat" /> Growth Found
            <p className="para4">
              1% is added to the SafeMoon Ecosystem Growth Fund
            </p>
          </h6>
        </div>
        <div className="col-md-6"><img className='spaceman' src="./Assists/spaceman-stars.png"  alt="" /></div>
      </div>
    </div>
  );
};

export default Token;
