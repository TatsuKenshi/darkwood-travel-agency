import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="nav">
        <div className="logo"></div>
        <div className="company">
          <h2>Darkwood Travel Agency</h2>
        </div>
        <div className="navigation-link-container">
          <div className="navigation-link-div">
            <NavLink to="./" className="navigation-link">
              Home
            </NavLink>
          </div>
          <div className="navigation-link-div">
            <NavLink to="./about" className="navigation-link">
              About
            </NavLink>
          </div>
          <div className="navigation-link-div">
            <NavLink to="./tours" className="navigation-link">
              Tours
            </NavLink>
          </div>
          <div className="navigation-link-div">
            <NavLink to="./checkout" className="navigation-link">
              Checkout
            </NavLink>
          </div>
        </div>
        <div className="social-link-container">
          <div className="navigation-link-div">
            <NavLink to="https://www.facebook.com" className="navigation-link">
              Fb
            </NavLink>
          </div>
          <div className="social-link-div">
            <NavLink to="/https://www.twitter.com" className="social-link">
              Tw
            </NavLink>
          </div>
          <div className="social-link-div">
            <NavLink to="/https://www.instagram.com" className="social-link">
              Ig
            </NavLink>
          </div>
          <div className="social-link-div">
            <NavLink to="/https://www.telegram.com" className="social-link">
              Tg
            </NavLink>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
