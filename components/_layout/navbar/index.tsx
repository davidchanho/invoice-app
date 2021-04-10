import React from "react";
import Avatar from "./Avatar";
import ToggleDarkMode from "./DarkModeButton";
import { Logo, LogoContainer } from "./Logo.styles";
import Nav from "./Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <Logo src="/assets/logo.svg" alt="logo icon" width={40} height={37.71} />
      </LogoContainer>
      <span className="spacer" />
      <ToggleDarkMode />
      <Avatar />
    </Nav>
  );
}

export default Navbar;
