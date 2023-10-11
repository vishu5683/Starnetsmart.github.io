import React from "react";
import "../Navbar.css";
import Logo from '../images/logo.png'
import Bag from '../images/Bag.png'

const Navbar = () => {
  return (
    <>
        <div class="header_sec">
      <navbar class="navbar navbar-expand-lg  bg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
          
          <a class="navbar-brand" href="#">
          <img class = "logo" src = {Logo}/>
          <span>
        Starnet<br />
        Smart
    </span>
          </a>
          
        
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  App
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              
            </ul>
  </div>


          <img class="bag" src = {Bag}/>
      </navbar>
        </div>
    </>
  );
};

export default Navbar;
