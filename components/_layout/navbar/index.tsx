import React from "react";
import styled from "styled-components";
import Avatar from "../../_shared/avatar";
import ToggleDarkMode from "./DarkModeButton";
import Logo from "./Logo.styles";
import Nav from "./Navbar.styles";

const LogoBg = styled.div`
  border-radius: 0 6px 6px 0;  
  padding: 25px;
  background: rgb(146, 119, 255);
  background: linear-gradient(
    0deg,
    rgba(146, 119, 255, 1) 51%,
    rgba(124, 93, 250, 1) 51%
  );
`;

function Navbar() {
  return (
    <Nav>
      <LogoBg>
        <Logo src="/assets/logo.svg" alt="logo icon" width={40} height={40} />
      </LogoBg>
      <span className="spacer" />
      <ToggleDarkMode />
      <Avatar />
    </Nav>
  );
}

export default Navbar;
