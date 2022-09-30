import React from "react";

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className=" nav-link active" aria-current="page" href="#">
          <img src="./Assists/safemoon-logo.png" alt="" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Swap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Merch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Patners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Markets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How to buy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
