import React from "react";
import styled from "styled-components";
import Avatar from "../avatar";
import Logo from "../logo";
import ToggleDarkMode from "../toggle-dark-mode";

const Container = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 0.3;
`;

function SideBar() {
  return (
    <Container>
      <Logo />
      <div>
        <ToggleDarkMode />
        <Avatar />
      </div>
    </Container>
  );
}

export default SideBar;
