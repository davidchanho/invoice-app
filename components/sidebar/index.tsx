import React from "react";
import styled from "styled-components";
import Logo from "../_layout/logo";
import Avatar from "../_shared/avatar";
import ToggleDarkMode from "./DarkModeButton";

const StyledSidebar = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkestSecondary};
  .spacer {
    flex: 0.9;
  }
  div {
    border-left: 1px solid black;
    padding-left: 30px;
  }
`;

function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <span className="spacer" />
      <ToggleDarkMode />
      <div>
        <Avatar />
      </div>
    </StyledSidebar>
  );
}

export default SideBar;
