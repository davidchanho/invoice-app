import React from "react";
import { selectApp, toggleDarkMode } from "../../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RoundedIcon } from "../../_shared/icons";

function DarkModeButton() {
  const { darkMode } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const onToggleDark = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <RoundedIcon
      onClick={onToggleDark}
      src={darkMode ? "assets/icon-sun.svg" : "assets/icon-moon.svg"}
      alt="toggle dark menu"
      width={20}
      height={20}
    />
  );
}

export default DarkModeButton;
