import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  .nav {
    background: pink;
    display: flex;
  }

  .navigation-link-container {
    display: flex;
    margin: 0 auto;
    align-items: center;
  }

  .social-link-container {
    display: flex;
    margin: 0 5vw 0 auto;
    align-items: center;
  }

  .navigation-link,
  .social-link {
    text-decoration: none;
  }
`;

export default StyledNavbar;
