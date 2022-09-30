import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsReddit } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-2">
            <img
              className="logo logo1"
              src="./Assists/safemoon-logo.png"
              alt=""
            />
          </div>
          <div className="col-md-6 col-10">
            <h4>SafeMoon - Innovating for Good</h4>
            <p>
              Building blockchain, commerce, metaverse and NFT products to
              derive new kinds of value from crypto technology and to apply it
              to increasingly better use. Advancing our innovations to every
              part of the world.
            </p>
            <div>
              <BsDiscord className="social" size={31} />
              <FaFacebookSquare className="social" size={31} />
              <FaTwitterSquare className="social" size={31} />
              <AiFillInstagram className="social" size={31} />
              <AiFillLinkedin className="social" size={31} />
              <AiFillYoutube className="social" size={31} />
              <BsReddit className="social" size={31} />
            </div>
          </div>
          <div className="col-md-2 col-6 right">
            <ul className="list-unstyled">
              <li>wallet Tracker</li>
              <li>Branding</li>
              <li>White paper</li>
              <li>Contract</li>
              <li>Status</li>
              <li>afeMoon Card</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 right ">
            <ul className="list-unstyled">
              <li>Support</li>
              <li>List a token</li>
              <li>Careers</li>
              <li>Education</li>
              <li>wallpaper</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
