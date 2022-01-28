import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <h2>Darkwood Travel Agency</h2>
      </div>
      <div className="social-link-container">
        <div className="social-link-div">
          <NavLink to="https://www.facebook.com" className="social-link">
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
  );
}

export default Navbar;
