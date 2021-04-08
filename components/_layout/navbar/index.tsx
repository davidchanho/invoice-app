import React from "react";
import Avatar from "../../_shared/avatar";
import ToggleDarkMode from "./DarkModeButton";
import Logo from "./Logo.styles";
import Nav from "./Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <Logo src="/assets/logo.svg" alt="logo icon" width={40} height={40} />
      <span className="spacer" />
      <ToggleDarkMode />
      <Avatar />
    </Nav>
  );
}

export default Navbar;
