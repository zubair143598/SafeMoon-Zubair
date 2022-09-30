import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-md-6 ">
            {" "}
            <p className="aboutus">About Us</p>
            <h3>
              A human-focused technology and innovation business expanding
              blockchain technologies for a brighter tomorrow.
            </h3>
            <p>
              Deeply connected to and driven by our award winning community (The
              SafeMoon Army), we are innovating for good. Building blockchain,
              commerce, metaverse and NFT products to derive new kinds of value
              from crypto technology and to apply it to increasingly better use.
            </p>
            <p>
              We are now addressing the second part of our mission – the
              expansion and channeling of our technology to propel new
              innovations for good, and a Venture Philanthropy model to advance
              those innovations to every part of the world.
            </p>
          </div>
          <div className="col-md-6">
            <img className="abouting" src="./Assists/V6.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
