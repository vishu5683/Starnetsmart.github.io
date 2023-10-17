import React from "react";
import "./index.css";
import Logo from "./assets/logo.png";
import Bag from "./assets/bag.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="brand-container">
          <a
            className="navbar-brand"
            href="#"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Logo} />
            <div className="brandNameContainer">
              <h2 className="brandNameHeading brandNameHeading1">Sternet</h2>
              <h2 className="brandNameHeading brandNameHeading2">Smart</h2>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 linkContainer">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <h5 className="links" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px' }}>Products</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <h5 className="links"style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px' }}>App</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <h5 className="links"style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px' }}>Support</h5>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                <h5 className="links"style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px' }}>About Us</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="bag" src = {Bag}/>
    </nav>
  );
};

export default Navbar;
