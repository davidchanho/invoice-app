import React from "react";
import { closeDrawer, selectApp } from "../../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SecondaryButton } from "../../_shared/buttons";
import Avatar from "./Avatar";
import Brand from "./Brand";
import ToggleDarkMode from "./DarkModeButton";
import Drawer from "./Drawer";
import Nav from "./Navbar.styles";

function Navbar() {
  const { drawerOpen } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  return (
    <>
      <Nav>
        <Brand />
        <span className="spacer" />
        <ToggleDarkMode />
        <Avatar />
      </Nav>
      {drawerOpen && (
        <Drawer>
          asdfadsfas
          <SecondaryButton onClick={handleCloseDrawer}>Close</SecondaryButton>
        </Drawer>
      )}
    </>
  );
}

export default Navbar;
