import React from "react";
import ToggleDarkMode from "../toggle-dark-mode";
import Logo from "../_layout/logo";
import Avatar from "../avatar";
import StyledAside from "./Sidebar.styles";

function SideBar() {
  return (
    <StyledAside>
      <Logo />
      <div>
        <ToggleDarkMode />
        <Avatar />
      </div>
    </StyledAside>
  );
}

export default SideBar;
