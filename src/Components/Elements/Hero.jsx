import React from "react";
import Typed from 'react-typed'; 
const Hero = () => {
  return (
    <div className="container-fluid hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <p>
              We've Evolved: Support for V1 SafeMoon has been officially closed.
            </p>
            <h2>welcome to</h2>
            <Typed className="typed-text" strings={["SAFEMOON"]} typeSpeed={180} />
            {/* <h1 className="fs-1">SAFEMOON</h1> */}
            <p>Community-driven Innovation for Good</p>
            <button
              data-aos="zoom-in-up"
              className=" col-md-6 col-12 button1"
              type="submit"
            >
              Consolidate to SAFEMOON
            </button>
            <a className="links" href="#">
              Buy 12
            </a>
            <a className="links" href="#">
              Swap
            </a>
            <a className="links" href="#">
              Live Chat
            </a>
            <p className="para3 pt-5">SafeMoon (SFM) V2 Contract:</p>
          </div>
          <div className="col-md-6 text-center">
            <p>Out Now:</p>
            <h3>SafeMoon Wallet</h3>
            <p>Get it on:</p>
            <img className="store" src="./Assists/app_store.png" alt="" />
            <img className="store" src="./Assists/google_play.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
