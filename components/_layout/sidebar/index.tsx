import React from "react";
import Avatar from "../../_shared/avatar";
import ToggleDarkMode from "./DarkModeButton";
import Logo from "./Logo";
import Nav from "./Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <Logo />
      <span className="spacer" />
      <ToggleDarkMode />
      <div>
        <Avatar />
      </div>
    </Nav>
  );
}

export default Navbar;
