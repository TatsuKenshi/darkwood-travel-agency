import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <div>
      <div>
        <h2>Darkwood Travel Agency</h2>
      </div>
      <div>
        <div>
          <Button to="/">Home</Button>
        </div>
        <div>
          <Button to="/tours">Tours</Button>
        </div>
        <div>
          <Button to="/about">About</Button>
        </div>
        <div>
          <Button to="/checkout">Checkout</Button>
        </div>
      </div>
      <div>
        <div>
          <NavLink to="https://www.facebook.com">Fb</NavLink>
        </div>
        <div>
          <NavLink to="/https://www.twitter.com">Tw</NavLink>
        </div>
        <div>
          <NavLink to="/https://www.instagram.com">Ig</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
