import React from "react";
import { selectApp } from "../../../app/appSlice";
import { useAppSelector } from "../../../app/hooks";
import Avatar from "./Avatar";
import Brand from "./Brand";
import ToggleDarkMode from "./DarkModeButton";
import Drawer from "./Drawer";
import Nav from "./Navbar.styles";

function Navbar() {
  const { drawerOpen } = useAppSelector(selectApp);

  return (
    <>
      <Nav>
        <Brand />
        <span className="spacer" />
        <ToggleDarkMode />
        <Avatar />
      </Nav>
      {drawerOpen && <Drawer />}
    </>
  );
}

export default Navbar;
