import React from "react";

const Intoducing = () => {
  return (
    <div className="introducing">
      <div className="container introducing">
        <div className="row">
          <div className="col-md-6">
            <p className="intro">Introducing </p>
            <h2>The SafeMoon Exchange</h2>
            <p>
              The SafeMoon exchange is a revolutionary new idea that will bring
              tokenomics to all of crypto on its platform. We call this
              Cryptonomics.
            </p>
            <button className="btn" type="button">
              Coming Soon
            </button>
          </div>
          <div data-aos="fade-down" className="col-md-6">
            <img className="iphone" src="./Assists/iphone.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intoducing;
